const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* BRAND */}
          <div className="text-center md:text-left">
            <a
              href="/#home"
              className="text-2xl font-extrabold tracking-tight text-[#172554]"
              aria-label="Victor Adama — Home"
            >
              Victor<span className="text-indigo-600">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500">
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
                className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600"
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
              aria-label="Visit Victor's GitHub profile"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-indigo-200 hover:bg-violet-50 hover:text-indigo-600"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/victor-adams-0a3b4c/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Victor's LinkedIn profile"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-indigo-200 hover:bg-violet-50 hover:text-indigo-600"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} Adama Victor{" "}
            <span className="font-semibold text-[#172554]">(Vikitek)</span>.
            All rights reserved.
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Designed and built with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
