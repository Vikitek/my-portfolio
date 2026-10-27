
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import vikitekLogo from "../assets/Vikitek.png";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Use the default theme if localStorage is unavailable.
  }

  return "light";
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still works for the current page if storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSectionClick = (section: string) => {
    closeMenu();

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(`/#${section}`);
    }
  };

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
  ];

  const linkClass =
    "text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-primary dark:text-slate-300";

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:bg-slate-800 dark:text-yellow-300 dark:hover:bg-slate-700"
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
      title={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    >
      <span aria-hidden="true">{theme === "light" ? "🌙" : "☀️"}</span>
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 px-6 py-4 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/90 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label="Go to homepage"
          >
            <img
              src={vikitekLogo}
              alt="Vikitek"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                type="button"
                onClick={() => handleSectionClick(item.section)}
                className={linkClass}
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleSectionClick("contact")}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Let's Talk
            </button>

            {themeButton}
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-3 md:hidden">
            {themeButton}

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-navy transition hover:border-violet-300 hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              type="button"
            >
              <span aria-hidden="true" className="text-xl">
                {isOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/20 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => handleSectionClick(item.section)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-violet-50 hover:text-primary dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handleSectionClick("contact")}
                className="mt-3 w-full rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;