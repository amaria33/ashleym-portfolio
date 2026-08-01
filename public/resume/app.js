(function () {
  const config = window.RESUME_CONFIG || {};
  const form = document.getElementById("order-form");
  const tierSelect = document.getElementById("tier");
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");
  const summaryEl = document.getElementById("order-summary");
  const totalEl = document.getElementById("order-total");
  const stripePay = document.getElementById("stripe-pay");
  const buyMount = document.getElementById("stripe-buy-button-mount");

  const prices = Object.assign(
    { starter: 39.5, career: 74.5, pro: 124.5 },
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

  if (tierSelect) tierSelect.addEventListener("change", updateOrderSummary);

  function money(n) {
    return n % 1 === 0 ? "$" + n.toFixed(0) : "$" + n.toFixed(2);
  }

  function getPaymentLink(tier) {
    return (config.stripeLinks || {})[tier] || "";
  }

  function getBuyButtonId(tier) {
    return (config.stripeBuyButtons || {})[tier] || "";
  }

  function showBuyButton(tier) {
    const buttonId = getBuyButtonId(tier);
    const pk = config.stripePublishableKey || "";
    if (!buttonId || !pk || !buyMount || !stripePay) return false;

    buyMount.innerHTML = "";
    const el = document.createElement("stripe-buy-button");
    el.setAttribute("buy-button-id", buttonId);
    el.setAttribute("publishable-key", pk);
    buyMount.appendChild(el);

    stripePay.hidden = false;
    if (submitBtn) submitBtn.hidden = true;
    stripePay.scrollIntoView({ behavior: "smooth", block: "center" });
    return true;
  }

  function updateOrderSummary() {
    if (!summaryEl || !totalEl) return;
    const tier = (tierSelect && tierSelect.value) || "";

    if (!tier || prices[tier] == null) {
      summaryEl.hidden = true;
      if (submitBtn) {
        submitBtn.hidden = false;
        submitBtn.textContent = "Submit order & pay with Stripe";
      }
      if (stripePay) stripePay.hidden = true;
      return;
    }

    const labels = { starter: "Starter", career: "Career", pro: "Pro" };
    const total = prices[tier];
    summaryEl.hidden = false;
    summaryEl.querySelector("[data-lines]").innerHTML =
      "<li>" + labels[tier] + " — " + money(total) + "</li>";
    totalEl.textContent = money(total);
    if (submitBtn) {
      submitBtn.hidden = false;
      submitBtn.textContent = "Submit order & pay " + money(total);
    }
    if (stripePay) stripePay.hidden = true;
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

  function goToPayment(tier, total) {
    if (showBuyButton(tier)) {
      showStatus(
        statusEl,
        "Order received — complete payment with the Stripe button below."
      );
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit order & pay " + money(total);
      }
      return;
    }

    const paymentUrl = getPaymentLink(tier);
    if (!paymentUrl) {
      showStatus(
        statusEl,
        "That package isn’t available for checkout yet. Email " +
          (config.contactEmail || "us") +
          ".",
        true
      );
      if (submitBtn) {
        submitBtn.disabled = false;
        updateOrderSummary();
      }
      return;
    }

    showStatus(
      statusEl,
      "Order received — redirecting to Stripe checkout for " + money(total) + "…"
    );
    if (submitBtn) submitBtn.textContent = "Redirecting to pay…";
    window.setTimeout(function () {
      window.location.href = paymentUrl;
    }, 700);
  }

  updateOrderSummary();

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const tier = (tierSelect && tierSelect.value) || "";
      const total = prices[tier] || 0;
      const hasBuyButton = Boolean(getBuyButtonId(tier));
      const hasPaymentLink = Boolean(getPaymentLink(tier));

      if (!tier) {
        showStatus(statusEl, "Please select a package.", true);
        return;
      }

      if (!hasBuyButton && !hasPaymentLink) {
        showStatus(
          statusEl,
          "That package isn’t available for checkout yet. Email " +
            (config.contactEmail || "us") +
            ".",
          true
        );
        return;
      }

      const formData = new FormData(form);
      formData.set("jd_pack", "no");
      formData.set("rush", "no");
      formData.set("order_total", money(total));
      formData.set(
        "_subject",
        "Resume Optimizer — New order (" + tier + " · " + money(total) + ")"
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
        goToPayment(tier, total);
      } catch (err) {
        showStatus(statusEl, "Couldn’t send the order form. Continuing to payment…", true);
        goToPayment(tier, total);
      }
    });
  }
})();
