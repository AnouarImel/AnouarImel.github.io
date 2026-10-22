
(function () {
  const button = document.getElementById("theme-toggle");
  const label = document.getElementById("theme-toggle-label");
  const icon = document.getElementById("theme-toggle-icon");
  const root = document.documentElement;

  if (!button || !label || !icon) return;

  function updateButton() {
    const isDark = root.getAttribute("data-theme") === "dark";

    label.textContent = isDark ? "Light" : "Dark";
    icon.className = isDark ? "fas fa-sun" : "fas fa-moon";

    button.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    button.setAttribute("aria-pressed", String(isDark));
  }

  button.addEventListener("click", function () {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);

    try {
      localStorage.setItem("anouar-theme", next);
    } catch (error) {}

    updateButton();
  });

  updateButton();
})();
