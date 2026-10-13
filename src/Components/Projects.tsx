import Nexcent from "../assets/Nexcent.png";
import Youtube from "../assets/Youtube.png";
import Fylo from "../assets/Fylo.jpg";
import Worknest from "../assets/Worknest.png";

const projects = [
  {
    title: "Nexcent",
    description:
      "A responsive landing page built from a Figma design using HTML and CSS.",
    image: Nexcent,
    github: "https://github.com/Vikitek/nexcent",
    live: "https://nexcent-olive-kappa.vercel.app/",
    status: "Completed",
  },
  {
    title: "YouTube Clone",
    description:
      "A YouTube-inspired interface built as part of my frontend development practice.",
    image: Youtube,
    github: "https://github.com/Vikitek/Youtube-Clone",
    live: "https://youtube-clone-chi-pink-21.vercel.app/",
    status: "Completed",
  },
  {
    title: "Fylo Dark",
    description:
      "A responsive dark-themed landing page built from a Frontend Mentor design.",
    image: Fylo,
    github: "https://github.com/Vikitek/Fylo-Dark",
    live: "https://viktek-fylo-dark.vercel.app/",
    status: "Completed",
  },
  {
    title: "WorkNest",
    description:
      "An in-progress group project based on a job application platform. I contributed to the Review & Submit section, form interactions, and progress-step functionality using React, TypeScript, and Tailwind CSS.",
    image: Worknest,
    status: "In Progress — Group Project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0f0f17] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          My Projects
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Here are some of the projects I have worked on while developing my
          skills in frontend and full-stack development.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-800 bg-[rgb(23,23,34)] transition duration-300 hover:-translate-y-2 hover:border-purple-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {project.live && project.github ? (
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700"
                    >
                      View Live Site
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-600 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-purple-500 hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                ) : (
                  <span className="inline-block rounded-lg border border-yellow-500/50 bg-yellow-500/10 px-5 py-2.5 font-medium text-yellow-400">
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
