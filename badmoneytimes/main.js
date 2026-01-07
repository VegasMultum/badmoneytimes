// main.js — Bad Money Times
// Mobile nav toggle + scroll reveal animations

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupScrollReveal();
});

function setupMobileNav() {
  const toggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (!toggle || !mobileNav) return;

  toggle.addEventListener("click", () => {
    const isHidden = mobileNav.classList.contains("hidden");

    if (isHidden) {
      mobileNav.classList.remove("hidden");
      toggle.setAttribute("aria-expanded", "true");
    } else {
      mobileNav.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close on resize back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mobileNav.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || elements.length === 0) {
    // Fallback: just show everything
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => observer.observe(el));
}
