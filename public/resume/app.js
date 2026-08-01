(function () {
  const config = window.RESUME_CONFIG || {};
  const form = document.getElementById("order-form");
  const tierSelect = document.getElementById("tier");
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");
  const jdPack = document.getElementById("jd-pack");
  const jdLinksWrap = document.getElementById("jd-links-wrap");
  const rush = document.getElementById("rush");
  const summaryEl = document.getElementById("order-summary");
  const totalEl = document.getElementById("order-total");

  const prices = Object.assign(
    { starter: 39.5, career: 74.5, pro: 124.5, jd: 29, rush: 29 },
    config.prices || {}
  );

  document.querySelectorAll(".select-tier").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tier = btn.getAttribute("data-tier");
      if (tierSelect && tier) {
        tierSelect.value = tier;
        updateOrderSummary();
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  function pad(n) {
    return String(Math.max(0, n)).padStart(2, "0");
  }

  function initCountdown() {
    const root = document.getElementById("sale-countdown");
    if (!root) return;

    const endValue = config.saleEndIso || root.getAttribute("data-end");
    const end = new Date(endValue).getTime();
    if (!end || Number.isNaN(end)) return;

    const daysEl = root.querySelector('[data-unit="days"]');
    const hoursEl = root.querySelector('[data-unit="hours"]');
    const minsEl = root.querySelector('[data-unit="mins"]');
    const secsEl = root.querySelector('[data-unit="secs"]');
    const labelEl = root.querySelector(".countdown-label");

    function tick() {
      const diff = end - Date.now();
      if (diff <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minsEl.textContent = "00";
        secsEl.textContent = "00";
        root.classList.add("is-ended");
        if (labelEl) labelEl.textContent = "Launch offer ended";
        return false;
      }

      const totalSecs = Math.floor(diff / 1000);
      const days = Math.floor(totalSecs / 86400);
      const hours = Math.floor((totalSecs % 86400) / 3600);
      const mins = Math.floor((totalSecs % 3600) / 60);
      const secs = totalSecs % 60;

      daysEl.textContent = pad(days);
      hoursEl.textContent = pad(hours);
      minsEl.textContent = pad(mins);
      secsEl.textContent = pad(secs);
      return true;
    }

    if (tick()) {
      window.setInterval(tick, 1000);
    }
  }

  initCountdown();

  if (jdPack && jdLinksWrap) {
    jdPack.addEventListener("change", () => {
      jdLinksWrap.hidden = !jdPack.checked;
      updateOrderSummary();
    });
  }

  if (tierSelect) tierSelect.addEventListener("change", updateOrderSummary);
  if (rush) rush.addEventListener("change", updateOrderSummary);

  function money(n) {
    return n % 1 === 0 ? "$" + n.toFixed(0) : "$" + n.toFixed(2);
  }

  function getSelection() {
    const tier = (tierSelect && tierSelect.value) || "";
    const wantsJd = Boolean(jdPack && jdPack.checked);
    const wantsRush = Boolean(rush && rush.checked);
    return { tier, wantsJd, wantsRush };
  }

  function getCheckoutKey(sel) {
    if (!sel.tier) return "";
    let key = sel.tier;
    if (sel.wantsJd) key += "+jd";
    if (sel.wantsRush) key += "+rush";
    return key;
  }

  function getOrderTotal(sel) {
    if (!sel.tier || prices[sel.tier] == null) return 0;
    let total = prices[sel.tier];
    if (sel.wantsJd) total += prices.jd;
    if (sel.wantsRush) total += prices.rush;
    return total;
  }

  function getPaymentLink(key) {
    return (config.stripeLinks || {})[key] || "";
  }

  function updateOrderSummary() {
    if (!summaryEl || !totalEl) return;
    const sel = getSelection();

    if (!sel.tier) {
      summaryEl.hidden = true;
      if (submitBtn) submitBtn.textContent = "Submit order & pay with Stripe";
      return;
    }

    const lines = [];
    const labels = { starter: "Starter", career: "Career", pro: "Pro" };
    lines.push(labels[sel.tier] + " — " + money(prices[sel.tier]));
    if (sel.wantsJd) lines.push("JD Tailoring Pack — " + money(prices.jd));
    if (sel.wantsRush) lines.push("Rush delivery — " + money(prices.rush));

    const total = getOrderTotal(sel);
    summaryEl.hidden = false;
    summaryEl.querySelector("[data-lines]").innerHTML = lines
      .map(function (line) {
        return "<li>" + line + "</li>";
      })
      .join("");
    totalEl.textContent = money(total);
    if (submitBtn) {
      submitBtn.textContent = "Pay " + money(total) + " with Stripe";
    }
  }

  function showStatus(el, message, isError) {
    if (!el) return;
    el.hidden = false;
    el.textContent = message;
    el.classList.toggle("error", Boolean(isError));
  }

  function formConfigured() {
    return (
      config.formspreeEndpoint &&
      !config.formspreeEndpoint.includes("YOUR_FORM_ID")
    );
  }

  updateOrderSummary();

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const sel = getSelection();
      const checkoutKey = getCheckoutKey(sel);
      const paymentUrl = getPaymentLink(checkoutKey);
      const total = getOrderTotal(sel);
      const hasAddons = sel.wantsJd || sel.wantsRush;

      if (!sel.tier) {
        showStatus(statusEl, "Please select a package.", true);
        return;
      }

      const formData = new FormData(form);
      formData.set("jd_pack", sel.wantsJd ? "yes" : "no");
      formData.set("rush", sel.wantsRush ? "yes" : "no");
      formData.set("checkout_key", checkoutKey);
      formData.set("order_total", money(total));
      formData.set(
        "_subject",
        "Resume Optimizer — New order (" + checkoutKey + " · " + money(total) + ")"
      );

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending order…";
      showStatus(statusEl, "Submitting your order details…");

      try {
        if (formConfigured()) {
          const response = await fetch(config.formspreeEndpoint, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
          });
          if (!response.ok) throw new Error("Form submit failed");
        }

        // One Stripe checkout only — never open multiple payment windows.
        if (paymentUrl) {
          showStatus(
            statusEl,
            "Order received — redirecting to one Stripe checkout for " + money(total) + "…"
          );
          submitBtn.textContent = "Redirecting to pay…";
          window.setTimeout(function () {
            window.location.href = paymentUrl;
          }, 700);
          return;
        }

        // Combo Payment Link not created yet — don't charge package alone.
        if (hasAddons) {
          showStatus(
            statusEl,
            "Order received for " +
              money(total) +
              ". I’ll email you one Stripe checkout link for the full total."
          );
          submitBtn.disabled = false;
          submitBtn.textContent = "Pay " + money(total) + " with Stripe";
          return;
        }

        showStatus(
          statusEl,
          "That package isn’t available for checkout yet. Email " +
            (config.contactEmail || "us") +
            ".",
          true
        );
        submitBtn.disabled = false;
        updateOrderSummary();
      } catch (err) {
        if (paymentUrl) {
          showStatus(statusEl, "Couldn’t send the order form. Continuing to payment…", true);
          submitBtn.textContent = "Redirecting to pay…";
          window.setTimeout(function () {
            window.location.href = paymentUrl;
          }, 700);
          return;
        }
        showStatus(
          statusEl,
          "Couldn’t send the order. Please email " +
            (config.contactEmail || "us") +
            " or try again.",
          true
        );
        submitBtn.disabled = false;
        updateOrderSummary();
      }
    });
  }
})();
