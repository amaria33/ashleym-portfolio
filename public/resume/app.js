(function () {
  const config = window.RESUME_CONFIG || {};
  const form = document.getElementById("order-form");
  const tierSelect = document.getElementById("tier");
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");
  const jdPack = document.getElementById("jd-pack");
  const jdLinksWrap = document.getElementById("jd-links-wrap");
  const rush = document.getElementById("rush");

  document.querySelectorAll(".select-tier").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tier = btn.getAttribute("data-tier");
      if (tierSelect && tier) {
        tierSelect.value = tier;
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
    });
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

  function getPaymentLink(tier) {
    return (config.stripeLinks || {})[tier] || "";
  }

  function openAddonLinks(urls) {
    urls.forEach(function (url) {
      window.open(url, "_blank", "noopener");
    });
  }

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const tier = tierSelect.value;
      const paymentUrl = getPaymentLink(tier);
      const wantsJdPack = Boolean(jdPack && jdPack.checked);
      const wantsRush = Boolean(rush && rush.checked);
      const jdPackUrl = getPaymentLink("jd-pack");
      const rushUrl = getPaymentLink("rush");

      if (!tier) {
        showStatus(statusEl, "Please select a package.", true);
        return;
      }

      if (!paymentUrl) {
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
      formData.set("jd_pack", wantsJdPack ? "yes" : "no");
      formData.set("rush", wantsRush ? "yes" : "no");
      formData.set("_subject", "Resume Optimizer — New order (" + tier + ")");

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending order…";
      showStatus(statusEl, "Submitting your order details…");

      const addonUrls = [];
      const pendingAddons = [];

      if (wantsJdPack) {
        if (jdPackUrl) addonUrls.push(jdPackUrl);
        else pendingAddons.push("JD Tailoring Pack ($29)");
      }
      if (wantsRush) {
        if (rushUrl) addonUrls.push(rushUrl);
        else pendingAddons.push("Rush delivery ($29)");
      }

      try {
        if (formConfigured()) {
          const response = await fetch(config.formspreeEndpoint, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
          });
          if (!response.ok) throw new Error("Form submit failed");
        }

        if (addonUrls.length) {
          openAddonLinks(addonUrls);
        }

        if (pendingAddons.length) {
          showStatus(
            statusEl,
            "Order received — redirecting to Stripe. I’ll email payment links for: " +
              pendingAddons.join(", ") +
              "."
          );
        } else if (addonUrls.length) {
          showStatus(
            statusEl,
            "Order received — opening add-on checkout, then your package…"
          );
        } else {
          showStatus(statusEl, "Order received — redirecting to secure Stripe checkout…");
        }

        submitBtn.textContent = "Redirecting to pay…";
        window.setTimeout(function () {
          window.location.href = paymentUrl;
        }, 700);
      } catch (err) {
        showStatus(statusEl, "Couldn’t send the order form. Continuing to payment…", true);
        submitBtn.textContent = "Redirecting to pay…";
        if (addonUrls.length) openAddonLinks(addonUrls);
        window.setTimeout(function () {
          window.location.href = paymentUrl;
        }, 700);
      }
    });
  }

  // Freebie form posts to FormSubmit (native submit) so autoresponse emails work.
})();
