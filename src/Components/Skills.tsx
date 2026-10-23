
const Skills = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Routes & Controllers",
    "Middleware",
    "MongoDB",
    "Mongoose",
    "Authentication",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Vercel",
    "googleAuth",
    "Brevo",
    "Claudinary",
    "Figma",
  ];

  const skillGroups = [
    {
      title: "Backend Development",
      description:
        "Building the server-side logic that allows applications to process requests, manage data, and deliver reliable functionality.",
      icon: "{ }",
      skills: backendSkills,
      featured: true,
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive interfaces that make applications accessible, intuitive, and pleasant to use.",
      icon: "</>",
      skills: frontendSkills,
      featured: false,
    },
    {
      title: "Tools & Workflow",
      description:
        "Using development and collaboration tools to write, test, manage, and deploy projects.",
      icon: "⚙",
      skills: tools,
      featured: false,
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-violet-50/50 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
            What I use to build
              useful applications.
            
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I'm building my skills across the development stack, with a
            particular interest in backend systems, APIs, and databases.
            Here's a look at the technologies and tools I work with in my
            projects.
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${
                group.featured
                  ? "border-violet-200 bg-white shadow-lg shadow-violet-100/70 ring-1 ring-violet-100"
                  : "border-slate-200 bg-white shadow-sm hover:border-violet-200 hover:shadow-violet-100/60"
              }`}
            >
              {/* BACKEND ACCENT */}
              {group.featured && (
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-violet-300" />
              )}

              <div className="flex items-center justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-xl font-bold text-primary transition duration-300 group-hover:bg-violet-100">
                  <span aria-hidden="true">{group.icon}</span>
                </div>

                {group.featured && (
                  <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-primary">
                    Current Focus
                  </span>
                )}
              </div>

              <h3 className="mt-7 text-2xl font-bold text-navy">
                {group.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {group.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-navy px-7 py-10 text-white md:px-12 md:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl"
          />

          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              My approach
            </p>

            <h3 className="mt-4 text-2xl font-semibold leading-relaxed md:text-3xl">
              I learn best by building, testing ideas, and working through
              real problems — one project at a time.
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-300">
              The goal isn't just to know the tools. It's to understand when
              and how to use them to build something that works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;