import victorImage from "../assets/victor.png";

const Hero = () => {
return ( <section
   id="home"
   className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-white px-6 py-16 md:px-12 lg:px-20"
 >
{/* Subtle background accents */} <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#a78bfa]/15 blur-[120px]" />

  <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#4f46e5]/10 blur-[140px]" />

  <div className="relative z-10 mx-auto w-full max-w-7xl">
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      {/* Introduction */}
      <div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#4f46e5] md:text-base">
          Hello, I'm
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-[#172554] md:text-6xl lg:text-7xl">
          Victor
          <span className="mt-1 block">
            Adama
          </span>
        </h1>

        <div className="mt-7 flex items-center gap-3">
          <h2 className="text-xl font-semibold text-[#172554] md:text-2xl">
            Backend Focused Developer
          </h2>
        </div>

        <p className="mt-6 max-w-xl text-base leading-8 text-[#64748b] md:text-lg">
          I enjoy building the systems that make web applications work.
          From designing APIs and working with databases to implementing
          authentication and server side logic, I focus on creating reliable
          backend solutions that solve real problems. I also build
          responsive frontends to bring those systems together into
          complete web applications.
        </p>

        {/* Core interests */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["Node.js", "Express", "MongoDB", "REST APIs"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#334155]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:bg-[#4338ca]"
          >
            View My Work
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#c7d2fe] bg-white px-7 py-3.5 font-semibold text-[#4338ca] transition duration-300 hover:-translate-y-1 hover:bg-[#f5f3ff]"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center gap-5">
          <a
            href="https://github.com/Viktor10tek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#64748b] transition hover:text-[#4f46e5]"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <span className="text-[#cbd5e1]">/</span>

          <a
            href="https://www.linkedin.com/in/victor-adams-0a3b4c/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#64748b] transition hover:text-[#4f46e5]"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Profile image */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative">
          {/* Soft lavender glow */}
          <div className="absolute inset-0 scale-90 bg-[#a78bfa]/20 blur-[50px]" />

          {/* Decorative frame */}
          <div className="absolute -right-4 -top-4 h-full w-full border-2 border-[#a78bfa]/50 md:-right-5 md:-top-5" />

          {/* Image container */}
          <div className="glow relative h-80 w-72 overflow-hidden rounded-[1rem] bg-[#f5f3ff] shadow-1xl md:h-[28rem] md:w-[23rem] lg:h-[34rem] lg:w-[27rem]">
            <img
              src={victorImage}
              alt="Victor Adama, backend-focused developer"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

         
      </div>
    </div>
  </div>
  </div>
</section>

);
};

export default Hero;