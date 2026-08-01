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

  function sendOrderEmails() {
    if (!form) return;
    const data = new FormData(form);
    if (subjectInput) data.set("_subject", subjectInput.value);
    data.delete("_next");

    // Formspree Forms inbox (captcha off)
    const formspree =
      config.formspreeEndpoint || "https://formspree.io/f/xwvgjqlb";
    fetch(formspree, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
      mode: "cors",
      keepalive: true,
    }).catch(function () {});

    // Backup email to hello@
    fetch("https://formsubmit.co/ajax/hello@builtbyashley.com", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
      mode: "cors",
      keepalive: true,
    }).catch(function () {});
  }

  function goToCheckout() {
    const tier = (tierSelect && tierSelect.value) || "";
    const total = prices[tier] || 0;
    const paymentUrl = stripeUrlFor(tier);

    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }

    if (!tier) {
      showStatus(statusEl, "Please select a package.", true);
      return false;
    }

    if (!paymentUrl) {
      showStatus(
        statusEl,
        "That package is not available for checkout yet. Email " +
          (config.contactEmail || "hello@builtbyashley.com") +
          ".",
        true
      );
      return false;
    }

    if (subjectInput) {
      subjectInput.value =
        "Resume Optimizer — New order (" + tier + " · " + money(total) + ")";
    }
    if (nextInput) nextInput.value = paymentUrl;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Opening Stripe…";
    }
    showStatus(statusEl, "Opening Stripe…");

    // Emails are fire-and-forget — never block Stripe
    sendOrderEmails();

    // Hard redirect — no Formspree page in between
    window.location.assign(paymentUrl);
    return true;
  }

  updateOrderSummary();

  if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
      event.preventDefault();
      goToCheckout();
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      goToCheckout();
    });
  }
})();
