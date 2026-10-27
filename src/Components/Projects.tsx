import Nexcent from "../assets/Nexcent.png";
import Youtube from "../assets/Youtube.png";
import Fylo from "../assets/Fylo.jpg";
import Worknest from "../assets/Worknest.png";

const projects = [
  {
    title: "WorkNest",
    description:
      "A job application platform built as a group project. I contributed to both the backend and frontend, helping bring the application's features and workflows together.",
    image: Worknest,
    live: "https://work-nest-front.vercel.app/",
    status: "Completed",
    category: "Full-Stack Development",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Nexcent",
    description:
      "A responsive landing page recreated from a Figma design. This project helped me strengthen my skills in building structured layouts and adapting interfaces to different screen sizes.",
    image: Nexcent,
    live: "https://nexcent-olive-kappa.vercel.app/",
    status: "Completed",
    category: "Frontend Development",
    technologies: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "YouTube Clone",
    description:
      "A YouTube-inspired interface built to practise frontend development, component layouts, and creating a familiar user experience for a video platform.",
    image: Youtube,
    live: "https://youtube-clone-chi-pink-21.vercel.app/",
    status: "Completed",
    category: "Frontend Development",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Fylo Dark",
    description:
      "A dark-themed, responsive landing page based on a Frontend Mentor challenge. I focused on translating a design into a clean layout that works across screen sizes.",
    image: Fylo,
    live: "https://fylo-dark-vik.vercel.app/",
    status: "Completed",
    category: "Frontend Development",
    technologies: ["HTML", "CSS", "Responsive Design"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="theme-bg scroll-mt-24 px-6 py-24 transition-colors duration-300 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Selected Work
          </p>

          <h2 className="theme-text mt-4 text-4xl font-bold leading-tight tracking-tight transition-colors duration-300 md:text-5xl lg:text-6xl">
            Projects I've worked on,
            <span className="text-primary block">
              and what I've learned.
            </span>
          </h2>

          <p className="theme-muted mt-6 max-w-2xl text-lg leading-8 transition-colors duration-300">
            Each project has taught me something different about building
            applications, solving problems, and turning ideas into working
            products. Here are a few examples of that journey.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="theme-card theme-border group flex flex-col overflow-hidden rounded-3xl border shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60 dark:hover:border-[#6558e8] dark:hover:shadow-violet-950/20"
            >
              {/* PROJECT IMAGE */}
              <div className="relative overflow-hidden bg-violet-50 dark:bg-[#29243f]">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="theme-text text-xl font-bold transition-colors duration-300 md:text-2xl">
                    {project.title}
                  </h3>

                  <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                    {project.status}
                  </span>
                </div>

                <p className="theme-muted mt-4 flex-1 text-sm leading-7 transition-colors duration-300">
                  {project.description}
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-800 transition-colors duration-300 dark:border-[#38334f] dark:bg-[#29243f] dark:text-[#c4b5fd]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* LIVE PROJECT LINK */}
                <div className="theme-border mt-7 border-t pt-5 transition-colors duration-300">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3 hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:hover:text-[#a78bfa]"
                    aria-label={`View ${project.title} live project`}
                  >
                    View Live Project
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;