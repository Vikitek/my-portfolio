const Skills = () => {
  // Skills you have practised through projects and hands-on development
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
    "REST API Development",
    "Routes & Controllers",
    "Middleware",
    "MongoDB",
    "Mongoose",
    "Authentication",
    "API Integration",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Vercel",
    "Render",
    "Google OAuth",
    "Brevo",
    "Cloudinary",
    "Figma",
  ];

  // Technologies and concepts you are currently learning and exploring
  const learningSkills = [
    "PostgreSQL",
    "SQL",
    "Supabase",
    "Supabase Edge Functions",
    "Row Level Security (RLS)",
    "Database Design",
    "Database Migrations",
    "SQL Joins",
    "Database Indexes",
    "Constraints",
    "ACID Transactions",
    "Supabase Authentication",
  ];

  const skillGroups = [
    {
      title: "Backend Development",
      description:
        "Building server-side applications, developing REST APIs, managing application data, and implementing authentication and backend functionality.",
      icon: "{ }",
      skills: backendSkills,
      featured: true,
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive and user-friendly interfaces using modern frontend technologies to deliver accessible and engaging web experiences.",
      icon: "</>",
      skills: frontendSkills,
      featured: false,
    },
    {
      title: "Tools & Workflow",
      description:
        "Using development, testing, collaboration, and deployment tools to build, manage, and deliver web applications.",
      icon: "⚙",
      skills: tools,
      featured: false,
    },
  ];

  return (
    <section
      id="skills"
      className="theme-bg-secondary scroll-mt-24 px-6 py-24 transition-colors duration-300 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Technical Skills
          </p>

          <h2 className="theme-text mt-4 text-4xl font-bold leading-tight tracking-tight transition-colors duration-300 md:text-5xl lg:text-6xl">
            What I use to build useful applications.
          </h2>

          <p className="theme-muted mt-6 max-w-2xl text-lg leading-8 transition-colors duration-300">
            I'm developing my skills across the software development stack,
            with a particular focus on backend engineering, API development,
            databases, and building reliable applications. Here are the
            technologies I have practised and the areas I am currently
            exploring.
          </p>
        </div>

        {/* PRACTISED SKILLS */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${
                group.featured
                  ? "border-violet-200 bg-white shadow-lg shadow-violet-100/70 ring-1 ring-violet-100 dark:border-[#494064] dark:bg-[#1b1b2a] dark:shadow-violet-950/20 dark:ring-[#38334f]"
                  : "theme-card theme-border shadow-sm hover:border-violet-200 hover:shadow-violet-100/60 dark:hover:border-[#6558e8] dark:hover:shadow-violet-950/20"
              }`}
            >
              {/* BACKEND ACCENT */}
              {group.featured && (
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-violet-300" />
              )}

              {/* ICON AND FEATURE LABEL */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-xl font-bold text-primary transition duration-300 group-hover:bg-violet-100 dark:bg-[#29243f] dark:group-hover:bg-[#383052]">
                  <span aria-hidden="true">{group.icon}</span>
                </div>

                {group.featured && (
                  <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-primary dark:border-[#494064] dark:bg-[#29243f]">
                    Primary Focus
                  </span>
                )}
              </div>

              {/* GROUP TITLE */}
              <h3 className="theme-text mt-7 text-2xl font-bold transition-colors duration-300">
                {group.title}
              </h3>

              {/* GROUP DESCRIPTION */}
              <p className="theme-muted mt-3 leading-7 transition-colors duration-300">
                {group.description}
              </p>

              {/* SKILL BADGES */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="theme-border theme-text rounded-full border bg-slate-50 px-3.5 py-2 text-sm font-medium transition duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-primary dark:bg-[#151522] dark:hover:border-[#6558e8] dark:hover:bg-[#29243f] dark:hover:text-[#a78bfa]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CURRENTLY LEARNING */}
        <div className="theme-card theme-border mt-10 rounded-3xl border p-7 transition-colors duration-300 md:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Expanding My Knowledge
              </p>

              <h3 className="theme-text mt-3 text-2xl font-bold md:text-3xl">
                Currently Learning & Exploring
              </h3>
            </div>

            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-primary dark:border-[#494064] dark:bg-[#29243f]">
              In Progress
            </span>
          </div>

          <p className="theme-muted mt-4 max-w-3xl leading-7">
            Strengthening my backend engineering knowledge through hands-on
            practice with relational databases, SQL, Supabase, and fintech
            backend concepts.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {learningSkills.map((skill) => (
              <span
                key={skill}
                className="theme-border theme-text rounded-full border bg-slate-50 px-3.5 py-2 text-sm font-medium transition duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-primary dark:bg-[#151522] dark:hover:border-[#6558e8] dark:hover:bg-[#29243f] dark:hover:text-[#a78bfa]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-navy px-7 py-10 text-white transition-colors duration-300 dark:bg-[#1b1b2a] md:px-12 md:py-12">
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

            <p className="mt-5 text-base leading-7 text-slate-300 dark:text-[#a1a1b5]">
              My goal is to go beyond learning technologies and develop
              the practical understanding needed to design, build, and
              maintain reliable software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
