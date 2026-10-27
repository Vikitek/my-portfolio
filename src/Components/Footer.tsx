const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-bg border-t theme-border px-6 py-10 transition-colors duration-300 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* BRAND */}
          <div className="text-center md:text-left">
            <a
              href="/#home"
              className="text-2xl font-extrabold tracking-tight theme-text transition-colors duration-300"
              aria-label="Vikitek — Home"
            >
              Vikitek<span className="text-indigo-600 dark:text-[#7c6fff]">.</span>
            </a>

            <p className="theme-muted mt-2 text-sm transition-colors duration-300">
              Building thoughtful solutions, one project at a time.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {[
              { label: "Home", href: "/#home" },
              { label: "About", href: "/#about" },
              { label: "Skills", href: "/#skills" },
              { label: "Projects", href: "/#projects" },
              { label: "Contact", href: "/#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="theme-muted text-sm font-medium transition-colors duration-200 hover:text-indigo-600 dark:hover:text-[#7c6fff]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Vikitek"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Vikitek's GitHub profile"
              className="theme-card theme-border theme-text rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-indigo-300 hover:bg-violet-50 hover:text-indigo-600 dark:hover:border-[#7c6fff] dark:hover:bg-[#201d3a] dark:hover:text-[#a9a1ff]"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/victor-adams-0a3b4c/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Vikitek's LinkedIn profile"
              className="theme-card theme-border theme-text rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-indigo-300 hover:bg-violet-50 hover:text-indigo-600 dark:hover:border-[#7c6fff] dark:hover:bg-[#201d3a] dark:hover:text-[#a9a1ff]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="theme-border mt-10 border-t pt-6 text-center">
          <p className="theme-muted text-sm">
            © {currentYear} Adama Victor{" "}
            <span className="theme-text font-semibold">(VikiTECH)</span>
            . All rights reserved.
          </p>

          <p className="theme-muted mt-2 text-xs opacity-75">
            Designed and built with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;