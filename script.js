const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark");

  themeToggle.setAttribute("aria-pressed", String(isDarkMode));
  themeToggle.textContent = isDarkMode
    ? "Switch to light mode"
    : "Switch to dark mode";
});