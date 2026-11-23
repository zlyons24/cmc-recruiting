// ===== Site settings: edit these to update business info across ALL pages =====
// For 10DLC approval, legalName must match the legal business name registered
// with The Campaign Registry (exactly as on your EIN / IRS paperwork).
const SITE = {
  legalName: "",    // e.g. "CMC Recruiting LLC"
  email: "",        // e.g. "info@yourdomain.com"
  phone: "",        // e.g. "(555) 123-4567"
  address: ""       // e.g. "123 Main St, Suite 100, Denver, CO 80202"
};
// ==============================================================================

const $$ = sel => document.querySelectorAll(sel);

// Fill in business details everywhere they appear
if (SITE.legalName) $$(".js-legal-name").forEach(el => (el.textContent = SITE.legalName));
if (SITE.email) $$(".js-email").forEach(el => {
  el.textContent = SITE.email;
  el.href = "mailto:" + SITE.email;
});
if (SITE.phone) $$(".js-phone").forEach(el => {
  el.innerHTML = `<a href="tel:${SITE.phone.replace(/[^\d+]/g, "")}">${SITE.phone}</a>`;
});
if (SITE.address) $$(".js-address").forEach(el => (el.textContent = SITE.address));

// Footer year
$$("#year").forEach(el => (el.textContent = new Date().getFullYear()));

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
    })
  );
}

// Contact form -> opens the visitor's email app with the message filled in.
// SMS consent choices and a timestamp are included so you keep a record of opt-in.
const form = document.getElementById("contactForm");
if (form) {
  const phone = form.querySelector('input[name="phone"]');
  const consentBoxes = form.querySelectorAll('.consent input[type="checkbox"]');
  const syncPhoneRequired = () => {
    const anyChecked = [...consentBoxes].some(b => b.checked);
    phone.required = anyChecked;
    phone.placeholder = anyChecked ? "Mobile phone (required for texts)" : "Mobile phone (optional)";
  };
  consentBoxes.forEach(b => b.addEventListener("change", syncPhoneRequired));

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!SITE.email) {
      alert("Our contact email is being set up. Please check back soon.");
      return;
    }
    const f = new FormData(form);
    const yn = v => (v === "yes" ? "YES" : "No");
    const subject = `${f.get("type")} inquiry from ${f.get("name")}`;
    const body =
      `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nMobile: ${f.get("phone") || "-"}\n` +
      `Company / Role: ${f.get("company") || "-"}\nI am: ${f.get("type")}\n\n${f.get("message")}\n\n` +
      `--- SMS consent ---\n` +
      `Recruiting/account texts: ${yn(f.get("sms_consent_service"))}\n` +
      `Job alerts/promotional texts: ${yn(f.get("sms_consent_marketing"))}\n` +
      `Submitted: ${new Date().toISOString()} from ${location.href}`;
    window.location.href =
      `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// Fade-in on scroll
const revealEls = $$(".section h2, .card, .step, .strip-grid > div, .checks");
if ("IntersectionObserver" in window) {
  revealEls.forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}
