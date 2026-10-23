
import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const highlights = [
    {
      icon: "⚙️",
      title: "Backend Development",
      text: "Building server-side logic and APIs that help applications work reliably.",
    },
    {
      icon: "🗄️",
      title: "Databases & APIs",
      text: "Working with data, designing API endpoints, and connecting application features.",
    },
    {
      icon: "💼",
      title: "Business Perspective",
      text: "Using my background in business administration to understand the problem behind the code.",
    },
    {
      icon: "🌱",
      title: "Continuous Learning",
      text: "Strengthening my skills by building projects, solving problems, and learning new concepts.",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            A Little About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
            I like understanding
            <span className="block text-primary">
              how things work.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Especially when I can turn that understanding into something
            useful.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* INTRODUCTION */}
          <div>
            <p className="text-base leading-8 text-slate-600 md:text-lg">
              I'm Victor Adama, a developer with a growing focus on backend
              development and fullstack web applications. I enjoy learning
              how the different parts of an application fit together; from
              the interface people use to the APIs, databases, and server-side
              logic working behind it.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Before moving into technology, I studied Business Administration
              and developed an appreciation for organization, communication,
              and understanding people's needs. That experience still shapes
              how I approach software: I want to understand the problem before
              deciding how to solve it.
            </p>

            {/* EXPANDABLE STORY */}
            {showMore && (
              <div className="mt-6 space-y-5 rounded-2xl border border-violet-100 bg-violet-50/70 p-6 md:p-8">
                <p className="leading-8 text-slate-600">
                  My journey into development started with the fundamentals
                  of web development. As I learned HTML, CSS, JavaScript,
                  React, and TypeScript, I became increasingly interested in
                  what happens behind the interface; how applications
                  process requests, manage information, and communicate with
                  databases.
                </p>

                <p className="leading-8 text-slate-600">
                  That curiosity has led me deeper into backend development,
                  including building APIs, working with databases, and
                  learning how authentication and server side logic fit into
                  a complete application.
                </p>

                <p className="leading-8 text-slate-600">
                  I'm continuing to grow through hands on projects and
                  practical problem-solving. My goal is to become a developer
                  who can build reliable systems while keeping the people
                  and real world needs behind those systems in mind.
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowMore((prev) => !prev)}
                aria-expanded={showMore}
                className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-sm shadow-indigo-200 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {showMore ? "Show Less" : "Read My Journey"}
                <span aria-hidden="true">
                  {showMore ? "↑" : ""}
                </span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-3 py-3 font-semibold text-navy transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Let's Connect <span aria-hidden="true"></span>
              </a>
            </div>
          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-gray-100 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60 md:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl transition duration-300 group-hover:bg-violet-100">
                  <span aria-hidden="true">{item.icon}</span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-navy">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mt-20 border-t border-slate-200 pt-10">
          <div className="rounded-3xl bg-violet-50/70 px-6 py-8 md:px-10 md:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              How I approach development
            </p>

            <blockquote className="mt-4 max-w-4xl text-2xl font-semibold leading-relaxed text-navy md:text-3xl">
              "Understand the problem, build a thoughtful solution, and keep
              improving it."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;