import nexcentImage from "../assets/Nexcent.png";
import worknestImage from "../assets/Worknest.png";
import youtubeImage from "../assets/Youtube.png";
import fyloImage from "../assets/Fylo.jpg";

export type Project = {
  title: string;
  slug: string;
  type: string;
  status: "Completed" | "In Progress";
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  contribution?: string[];
  challenges?: string;
  learning?: string;
};

export const projects: Project[] = [
  {
    title: "Nexcent",
    slug: "nexcent",
    type: "Frontend Project",
    status: "Completed",

    description:
      "A responsive landing page recreated from a Figma design, with a focus on clean layouts and adapting the interface to different screen sizes.",

    technologies: ["HTML", "CSS", "Responsive Design"],

    image: nexcentImage,

    liveUrl: "https://nexcent-olive-kappa.vercel.app/",

    contribution: [
      "Translated the design into a responsive web interface.",
      "Built structured page sections and layouts.",
      "Applied responsive styling for different screen sizes.",
      "Practiced translating a visual design into a working website.",
    ],

    challenges:
      "Maintaining consistent spacing and alignment across different screen sizes while staying close to the original design.",

    learning:
      "This project strengthened my understanding of HTML, CSS and responsive web design.",
  },

  {
    title: "WorkNest",
    slug: "worknest",
    type: "Full-Stack Group Project",
    status: "Completed",

    description:
      "A collaborative job platform built to provide users with a structured, user-friendly experience when interacting with job opportunities. The project brought together frontend interfaces and backend functionality.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    image: worknestImage,

    liveUrl: "https://work-nest-front.vercel.app/",

    contribution: [
      "Contributed extensively to the frontend and backend development.",
      "Worked with the team to bring the application's features and workflows together.",
      "Helped implement application interfaces and functionality.",
      "Collaborated with team members throughout development.",
    ],

    challenges:
      "Coordinating frontend and backend functionality while collaborating with other developers and ensuring different parts of the application worked together.",

    learning:
      "This project strengthened my understanding of full-stack development, API integration, database-backed applications and collaborative software development.",
  },

  {
    title: "YouTube Clone",
    slug: "youtube-clone",
    type: "Frontend Project",
    status: "Completed",

    description:
      "A YouTube-inspired interface built to practise page layouts, navigation, video cards and responsive frontend design.",

    technologies: ["HTML", "CSS", "JavaScript"],

    image: youtubeImage,

    liveUrl: "https://youtube-clone-chi-pink-21.vercel.app/",

    contribution: [
      "Recreated a YouTube-inspired interface.",
      "Built video-card layouts and page sections.",
      "Implemented navigation and sidebar elements.",
      "Practised CSS Grid, Flexbox and responsive styling.",
    ],

    challenges:
      "Recreating a familiar interface while maintaining consistent spacing, alignment and responsive behavior.",

    learning:
      "This project strengthened my HTML, CSS and JavaScript fundamentals and improved my understanding of responsive layouts.",
  },

  {
    title: "Fylo Dark",
    slug: "fylo-dark",
    type: "Frontend Project",
    status: "Completed",

    description:
      "A responsive landing page built to practise modern layouts, typography, spacing, visual hierarchy and responsive design.",

    technologies: ["HTML", "CSS", "Responsive Design"],

    image: fyloImage,

    liveUrl: "https://fylo-dark-vik.vercel.app/",

    contribution: [
      "Built the page structure using HTML.",
      "Styled the interface using CSS.",
      "Implemented responsive layouts.",
      "Practised typography, spacing and visual hierarchy.",
      "Added interactive hover effects.",
    ],

    challenges:
      "Matching the intended design while maintaining a responsive layout required careful attention to spacing, sizing and positioning.",

    learning:
      "This project improved my CSS layout skills and helped me become more comfortable translating designs into working web pages.",
  },
];
