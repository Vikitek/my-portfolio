import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white px-6 py-24">
        <div className="max-w-lg text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
            404 — Not Found
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#172554] md:text-5xl">
            Project Not Found
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            Sorry, we couldn't find the project you're looking for. It may
            have been moved or the link may be incorrect.
          </p>

          <Link
            to="/#projects"
            className="mt-8 inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#172554] md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* BACK NAVIGATION */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-600"
        >
          <span aria-hidden="true">←</span> Back to Projects
        </Link>

        {/* PROJECT HEADER */}
        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              {project.type}
            </span>

            <span
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                project.status === "In Progress"
                  ? "border-amber-200 bg-amber-50 text-amber-700"
                  : "border-emerald-200 bg-emerald-50 text-emerald-700"
              }`}
            >
              <span
                className={`mr-2 inline-block h-1.5 w-1.5 rounded-full ${
                  project.status === "In Progress"
                    ? "bg-amber-500"
                    : "bg-emerald-500"
                }`}
              />
              {project.status}
            </span>
          </div>

          <h1 className="mt-5 break-words text-4xl font-extrabold tracking-tight text-[#172554] sm:text-5xl md:text-6xl lg:text-7xl">
            {project.title}
            <span className="text-indigo-600">.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {project.description}
          </p>
        </header>

        {/* PROJECT PREVIEW */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-violet-50 shadow-[0_20px_60px_rgba(23,37,84,0.08)] md:mt-14 md:rounded-3xl">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="block h-auto max-h-[650px] w-full object-contain object-top"
          />
        </div>

        {/* PROJECT INFORMATION */}
        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* CONTRIBUTION */}
          {project.contribution && project.contribution.length > 0 && (
            <section>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                The Work
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#172554] md:text-3xl">
                My Contribution
              </h2>

              <div className="mt-6 space-y-5">
                {project.contribution.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-indigo-700">
                      ✓
                    </span>

                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TECHNOLOGIES */}
          <section>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Built With
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#172554] md:text-3xl">
              Technologies
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Tools and technologies used to build this project.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-violet-100 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-[#312e81] transition hover:border-indigo-200 hover:bg-violet-100"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* CHALLENGES AND LEARNING */}
        {(project.challenges || project.learning) && (
          <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-2">
            {project.challenges && (
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-xl text-indigo-700">
                  <span aria-hidden="true">⌘</span>
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#172554] md:text-2xl">
                  Challenges
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  {project.challenges}
                </p>
              </section>
            )}

            {project.learning && (
              <section className="rounded-2xl border border-violet-100 bg-violet-50/70 p-6 md:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl text-indigo-700 shadow-sm">
                  <span aria-hidden="true">✦</span>
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#172554] md:text-2xl">
                  What I Learned
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  {project.learning}
                </p>
              </section>
            )}
          </div>
        )}

        {/* PROJECT ACTIONS */}
        <section className="mt-14 rounded-2xl bg-[#172554] p-7 text-white md:mt-20 md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Interested in this project?
              </h2>

              <p className="mt-2 max-w-xl leading-7 text-slate-300">
                Explore the live version to see the project in action.
              </p>
            </div>

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#172554] transition hover:-translate-y-0.5 hover:bg-violet-100"
              >
                View Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </section>

        {/* RETURN TO PROJECTS */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:text-indigo-800"
          >
            ← Explore More Projects
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;