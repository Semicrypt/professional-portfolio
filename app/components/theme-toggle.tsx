"use client";

export function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;

    const current =
      root.dataset.theme === "light"
        ? "light"
        : "dark";

    const next =
      current === "dark"
        ? "light"
        : "dark";

    root.dataset.theme = next;
    root.style.colorScheme = next;

    localStorage.setItem(
      "divine-portfolio-theme",
      next,
    );
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      title="Switch color theme"
    >
      <span
        className="theme-toggle-sun"
        aria-hidden="true"
      >
        ☀
      </span>

      <span
        className="theme-toggle-moon"
        aria-hidden="true"
      >
        ☾
      </span>

      <span className="theme-toggle-text">
        <span className="theme-toggle-light-label">
          Light
        </span>

        <span className="theme-toggle-dark-label">
          Dark
        </span>
      </span>
    </button>
  );
}
