// ===== Site settings: edit these to update contact info across the site =====
const SITE = {
  email: "",        // e.g. "info@yourdomain.com"
  phone: "",        // e.g. "(555) 123-4567"
  location: ""      // e.g. "Denver, CO"
};
// ============================================================================

// Fill in contact details
const emailEl = document.querySelector(".js-email");
if (SITE.email) {
  emailEl.textContent = SITE.email;
  emailEl.href = "mailto:" + SITE.email;
}
if (SITE.phone) {
  const phoneEl = document.querySelector(".js-phone");
  phoneEl.innerHTML = `<a href="tel:${SITE.phone.replace(/[^\d+]/g, "")}">${SITE.phone}</a>`;
}
if (SITE.location) document.querySelector(".js-location").textContent = SITE.location;

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
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

// Contact form -> opens the visitor's email app with the message filled in
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!SITE.email) {
    alert("Our contact email is being set up. Please check back soon.");
    return;
  }
  const f = new FormData(e.target);
  const subject = `${f.get("type")} inquiry from ${f.get("name")}`;
  const body =
    `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone") || "-"}\n` +
    `Company / Role: ${f.get("company") || "-"}\nI am: ${f.get("type")}\n\n${f.get("message")}`;
  window.location.href =
    `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Fade-in on scroll
const revealEls = document.querySelectorAll(".section h2, .card, .step, .strip-grid > div, .checks");
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
