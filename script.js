const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.setAttribute("aria-label", "Switch to light theme");
} else {
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");

  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
});

const activeHash = window.location.hash || "#about";

navLinks.forEach((link) => {
  if (link.getAttribute("href") === activeHash) {
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
