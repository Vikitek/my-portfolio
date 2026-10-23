
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import vikitekLogo from "../assets/Vikitek.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
    "text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-primary";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 px-6 py-4 backdrop-blur-xl md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label="Go to homepage"
          >
            <img
              src={vikitekLogo}
              alt="Vikitek"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
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
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-navy transition hover:border-violet-300 hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <span aria-hidden="true" className="text-xl">
              {isOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => handleSectionClick(item.section)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-violet-50 hover:text-primary"
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