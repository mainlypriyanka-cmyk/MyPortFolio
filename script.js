document.addEventListener("DOMContentLoaded", () => {
  // Dark / Light Mode
  const themeButton = document.getElementById("theme-toggle");

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      themeButton.textContent =
        document.body.classList.contains("dark-mode")
          ? "☀️ Light Mode"
          : "🌙 Dark Mode";
    });
  }

  // Mobile Navigation
  const menuButton = document.getElementById("menu-toggle");
  const navigation = document.getElementById("nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        navigation?.classList.remove("active");
      }
    });
  });

  // Contact Form Validation
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      alert("Form validated successfully!");
    });
  }

  // Scroll Animations
  const animatedElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    animatedElements.forEach((element) => {
      element.classList.add("visible");
    });
  }
});