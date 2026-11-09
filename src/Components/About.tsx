import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const highlights = [
    {
      icon: "⚙️",
      title: "Backend Development",
      text: "Developing server-side applications, building REST APIs, and implementing application logic.",
    },
    {
      icon: "🗄️",
      title: "Databases & Data Management",
      text: "Working with MongoDB and exploring PostgreSQL, SQL, database relationships, and data integrity.",
    },
    {
      icon: "💼",
      title: "Business Perspective",
      text: "Combining my Business Administration background with technology to understand problems and build practical solutions.",
    },
    {
      icon: "🌱",
      title: "Continuous Learning",
      text: "Expanding my backend knowledge through TypeScript, Supabase, Edge Functions, and hands-on projects.",
    },
  ];

  return (
    <section
      id="about"
      className="theme-bg scroll-mt-24 px-6 py-24 transition-colors duration-300 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            A Little About Me
          </p>

          <h2 className="theme-text mt-4 text-4xl font-bold leading-tight tracking-tight transition-colors duration-300 md:text-5xl lg:text-6xl">
            I like understanding <br />
            how things work.
          </h2>

          <p className="theme-muted mt-6 max-w-2xl text-lg leading-8 transition-colors duration-300">
            Especially when I can turn that understanding into reliable
            technology that solves real-world problems.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* INTRODUCTION */}
          <div>
            <p className="theme-muted text-base leading-8 transition-colors duration-300 md:text-lg">
              I'm Victor Adama, a backend-focused developer with an interest
              in building reliable web applications and the systems that
              power them. I enjoy working with APIs, databases, server-side
              logic, and the technologies that connect different parts of
              an application.
            </p>

            <p className="theme-muted mt-6 text-base leading-8 transition-colors duration-300 md:text-lg">
              My background is in Business Administration, where I developed
              valuable experience in operations, sales, logistics, and
              customer relationship management. This experience influences
              how I approach software development: understanding the
              underlying problem, considering the people involved, and
              building solutions that serve a practical purpose.
            </p>

            {/* EXPANDABLE STORY */}
            {showMore && (
              <div className="mt-6 space-y-5 rounded-2xl border border-violet-100 bg-violet-50/70 p-6 transition-colors duration-300 dark:border-[#38334f] dark:bg-[#1b1b2a] md:p-8">
                <p className="theme-muted leading-8">
                  My journey into technology started with learning the
                  fundamentals of web development. Through HTML, CSS,
                  JavaScript, TypeScript, React, and Tailwind CSS, I developed
                  an understanding of how modern web interfaces are built.
                  As I progressed, I became increasingly interested in the
                  backend systems responsible for processing requests,
                  managing data, and powering application functionality.
                </p>

                <p className="theme-muted leading-8">
                  I have since been developing my backend skills with
                  Node.js, Express.js, MongoDB, and Mongoose, including
                  building REST APIs, working with authentication, and
                  connecting application features to databases.
                </p>

                <p className="theme-muted leading-8">
                  More recently, I have been expanding my knowledge of
                  relational databases and fintech backend technologies.
                  This includes learning SQL and PostgreSQL, database
                  relationships, joins, indexes, constraints, migrations,
                  and ACID transactions. I have also been exploring
                  Supabase, its authentication system, Row Level Security
                  (RLS), and Edge Functions using TypeScript.
                </p>

                <p className="theme-muted leading-8">
                  I believe my combination of business experience and
                  technical development gives me a useful perspective:
                  I don't just want to write code; I want to understand
                  the needs behind the software and build solutions that
                  are dependable, useful, and maintainable.
                </p>

                <p className="theme-muted leading-8">
                  My goal is to continue growing as a backend engineer,
                  contribute to meaningful software projects, and develop
                  the skills needed to build secure and scalable applications,
                  particularly in the fintech space.
                </p>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowMore((prev) => !prev)}
                aria-expanded={showMore}
                className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-sm shadow-indigo-200 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:shadow-indigo-950/40"
              >
                {showMore ? "Show Less" : "Read My Journey"}
                <span aria-hidden="true">
                  {showMore ? "↑" : "↓"}
                </span>
              </button>

              <a
                href="#contact"
                className="theme-text inline-flex items-center gap-2 rounded-full px-3 py-3 font-semibold transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Let's Connect <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="theme-card theme-border group rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/60 dark:hover:border-[#6558e8] dark:hover:shadow-violet-950/20 md:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl transition duration-300 group-hover:bg-violet-100 dark:bg-[#29243f] dark:group-hover:bg-[#383052]">
                  <span aria-hidden="true">{item.icon}</span>
                </div>

                <h3 className="theme-text mt-5 text-lg font-bold transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="theme-muted mt-3 text-sm leading-7 transition-colors duration-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;