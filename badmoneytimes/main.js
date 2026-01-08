// main.js — Bad Money Times
// Scroll reveal animations.
// NOTE: Mobile nav toggle is handled inline per-page to avoid double-binding.

document.addEventListener("DOMContentLoaded", () => {
  setupScrollReveal();
});

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
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}
