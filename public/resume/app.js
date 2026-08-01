(function () {
  const config = window.RESUME_CONFIG || {};
  const form = document.getElementById("order-form");
  const tierSelect = document.getElementById("tier");
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");
  const summaryEl = document.getElementById("order-summary");
  const totalEl = document.getElementById("order-total");
  const nextInput = document.getElementById("order-next");
  const subjectInput = document.getElementById("order-subject");

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

  function payUrlFor(tier) {
    return (
      "https://www.builtbyashley.com/resume/pay.html?tier=" +
      encodeURIComponent(tier)
    );
  }

  function stripeUrlFor(tier) {
    return ((config.stripeLinks || {})[tier] || "").trim();
  }

  function updateOrderSummary() {
    if (!summaryEl || !totalEl) return;
    const tier = (tierSelect && tierSelect.value) || "";
    const directPay = document.getElementById("direct-pay");
    const directPayWrap = document.getElementById("direct-pay-wrap");

    if (!tier || prices[tier] == null) {
      summaryEl.hidden = true;
      if (submitBtn) submitBtn.textContent = "Submit order & pay with Stripe";
      if (directPayWrap) directPayWrap.hidden = true;
      return;
    }

    const labels = { starter: "Starter", career: "Career", pro: "Pro" };
    const total = prices[tier];
    const stripeUrl = stripeUrlFor(tier);
    summaryEl.hidden = false;
    summaryEl.querySelector("[data-lines]").innerHTML =
      "<li>" + labels[tier] + " — " + money(total) + "</li>";
    totalEl.textContent = money(total);
    if (submitBtn) submitBtn.textContent = "Submit order & pay " + money(total);
    if (nextInput) nextInput.value = payUrlFor(tier);
    if (subjectInput) {
      subjectInput.value =
        "Resume Optimizer — New order (" + tier + " · " + money(total) + ")";
    }
    if (directPay && directPayWrap && stripeUrl) {
      directPay.href = stripeUrl;
      directPay.textContent = "Open Stripe checkout for " + money(total);
      directPayWrap.hidden = false;
    } else if (directPayWrap) {
      directPayWrap.hidden = true;
    }
  }

  function showStatus(el, message, isError) {
    if (!el) return;
    el.hidden = false;
    el.textContent = message;
    el.classList.toggle("error", Boolean(isError));
  }

  updateOrderSummary();

  if (form) {
    form.addEventListener("submit", function (event) {
      // Open Stripe immediately (captcha/Formspree was stranding checkout).
      // Order details are emailed via FormSubmit in the background.
      event.preventDefault();

      const tier = (tierSelect && tierSelect.value) || "";
      const total = prices[tier] || 0;
      const paymentUrl = stripeUrlFor(tier) || payUrlFor(tier);

      if (!tier) {
        showStatus(statusEl, "Please select a package.", true);
        return;
      }

      if (!stripeUrlFor(tier)) {
        showStatus(
          statusEl,
          "That package isn’t available for checkout yet. Email " +
            (config.contactEmail || "us") +
            ".",
          true
        );
        return;
      }

      if (nextInput) nextInput.value = payUrlFor(tier);
      if (subjectInput) {
        subjectInput.value =
          "Resume Optimizer — New order (" + tier + " · " + money(total) + ")";
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Opening checkout…";
      }
      showStatus(statusEl, "Opening Stripe checkout…");

      // Email order details to hello@ (FormSubmit — no Formspree captcha)
      try {
        const data = new FormData(form);
        data.set("_subject", subjectInput ? subjectInput.value : "Resume Optimizer — New order");
        data.set("_template", "table");
        data.delete("_next");
        fetch("https://formsubmit.co/ajax/hello@builtbyashley.com", {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
          mode: "cors",
          keepalive: true,
        }).catch(function () {});
      } catch (err) {
        /* ignore */
      }

      window.location.href = paymentUrl;
    });
  }
})();
