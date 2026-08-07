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
  const addonPrices = Object.assign(
    { coverLetter: 14.5 },
    config.addonPrices || {}
  );
  const addonCheckbox = document.getElementById("addon-cover-letter");
  const addonWrap = document.getElementById("addon-cover-letter-wrap");
  const addonProNote = document.getElementById("addon-pro-note");

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
  if (addonCheckbox) addonCheckbox.addEventListener("change", updateOrderSummary);

  function money(n) {
    return n % 1 === 0 ? "$" + n.toFixed(0) : "$" + n.toFixed(2);
  }

  function coverLetterSelected(tier) {
    // Pro already includes a cover letter — never charge the add-on for it
    return Boolean(addonCheckbox && addonCheckbox.checked && tier !== "pro");
  }

  function stripeUrlFor(tier, withCoverLetter) {
    if (withCoverLetter) {
      const combined = (
        (config.stripeLinksWithCoverLetter || {})[tier] || ""
      ).trim();
      if (combined) return combined;
    }
    return ((config.stripeLinks || {})[tier] || "").trim();
  }

  function hasCombinedLink(tier) {
    return Boolean(((config.stripeLinksWithCoverLetter || {})[tier] || "").trim());
  }

  function orderTotal(tier) {
    let total = prices[tier] || 0;
    if (coverLetterSelected(tier)) total += addonPrices.coverLetter;
    return total;
  }

  function orderLabel(tier) {
    return tier + (coverLetterSelected(tier) ? " + cover letter" : "");
  }

  function updateOrderSummary() {
    if (!summaryEl || !totalEl) return;
    const tier = (tierSelect && tierSelect.value) || "";
    const directPay = document.getElementById("direct-pay");
    const directPayWrap = document.getElementById("direct-pay-wrap");

    // Hide the add-on option for Pro (already included)
    const isPro = tier === "pro";
    if (addonWrap) addonWrap.hidden = isPro;
    if (addonProNote) addonProNote.hidden = !isPro;

    if (!tier || prices[tier] == null) {
      summaryEl.hidden = true;
      if (submitBtn) submitBtn.textContent = "Submit order & pay with Stripe";
      if (directPayWrap) directPayWrap.hidden = true;
      return;
    }

    const labels = { starter: "Starter", career: "Career", pro: "Pro" };
    const withCoverLetter = coverLetterSelected(tier);
    const total = orderTotal(tier);
    const stripeUrl = stripeUrlFor(tier, withCoverLetter);

    let lines = "<li>" + labels[tier] + " — " + money(prices[tier]) + "</li>";
    if (withCoverLetter) {
      lines +=
        "<li>Cover Letter add-on — " + money(addonPrices.coverLetter) + "</li>";
    }
    summaryEl.hidden = false;
    summaryEl.querySelector("[data-lines]").innerHTML = lines;
    totalEl.textContent = money(total);
    if (submitBtn) submitBtn.textContent = "Submit order & pay " + money(total);
    if (subjectInput) {
      subjectInput.value =
        "Resume Optimizer — New order (" + orderLabel(tier) + " · " + money(total) + ")";
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
    const withCoverLetter = coverLetterSelected(tier);
    const total = orderTotal(tier);
    const paymentUrl = stripeUrlFor(tier, withCoverLetter);

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
        "Resume Optimizer — New order (" + orderLabel(tier) + " · " + money(total) + ")";
    }
    if (nextInput) nextInput.value = paymentUrl;

    // No combined Stripe link yet — charge the package now and follow up
    // with the standalone cover letter link by email.
    if (withCoverLetter && !hasCombinedLink(tier)) {
      showStatus(
        statusEl,
        "Your package checkout is opening — I'll email you the $14.50 cover letter link right after."
      );
    }

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

  // Wire template Buy buttons to Stripe Payment Links when configured
  document.querySelectorAll(".template-buy").forEach((btn) => {
    const pack = btn.getAttribute("data-pack");
    const url = ((config.stripeLinks || {})[pack] || "").trim();
    if (url) {
      btn.href = url;
      btn.target = "_blank";
      btn.rel = "noopener";
    }
  });

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
