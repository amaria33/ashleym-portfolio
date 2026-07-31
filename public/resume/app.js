(function () {
  const config = window.RESUME_CONFIG || {};
  const form = document.getElementById("order-form");
  const tierSelect = document.getElementById("tier");
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  document.querySelectorAll(".select-tier").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tier = btn.getAttribute("data-tier");
      if (tierSelect && tier) {
        tierSelect.value = tier;
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  function showStatus(message, isError) {
    statusEl.hidden = false;
    statusEl.textContent = message;
    statusEl.classList.toggle("error", Boolean(isError));
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

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const tier = tierSelect.value;
    const paymentUrl = getPaymentLink(tier);

    if (!tier) {
      showStatus("Please select a package.", true);
      return;
    }

    if (!paymentUrl) {
      showStatus(
        "That package isn’t available for checkout yet. Email " +
          (config.contactEmail || "us") +
          ".",
        true
      );
      return;
    }

    const formData = new FormData(form);
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending order…";
    showStatus("Submitting your order details…");

    try {
      if (formConfigured()) {
        const response = await fetch(config.formspreeEndpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("Form submit failed");
      }

      showStatus("Order received — redirecting to secure Stripe checkout…");
      submitBtn.textContent = "Redirecting to pay…";
      window.setTimeout(function () {
        window.location.href = paymentUrl;
      }, 600);
    } catch (err) {
      showStatus("Couldn’t send the order form. Continuing to payment…", true);
      submitBtn.textContent = "Redirecting to pay…";
      window.setTimeout(function () {
        window.location.href = paymentUrl;
      }, 600);
    }
  });
})();
