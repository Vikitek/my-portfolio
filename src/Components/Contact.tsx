import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ContactFormData } from "../types/contact";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setSubmitted(false);
    setError("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("The contact service is not configured yet.");
      }

      const response = await fetch(
        `${apiUrl.replace(/\/+$/, "")}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message || "We couldn't send your message. Please try again.",
        );
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    "theme-border theme-text w-full rounded-xl border bg-white px-4 py-3.5 placeholder:text-slate-400 outline-none transition-colors duration-300 focus:border-primary focus:ring-4 focus:ring-violet-100 dark:bg-[#151522] dark:placeholder:text-[#77778f] dark:focus:ring-[#29243f]";

  return (
    <section
      id="contact"
      className="theme-bg-secondary scroll-mt-24 px-6 py-24 transition-colors duration-300 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Get in Touch
          </p>

          <h2 className="theme-text mt-4 text-4xl font-bold leading-tight tracking-tight transition-colors duration-300 md:text-5xl lg:text-6xl">
            Have something
            <span className="text-primary block">in mind?</span>
          </h2>

          <p className="theme-muted mt-6 max-w-2xl text-lg leading-8 transition-colors duration-300">
            Whether it's a development opportunity, a project, or a conversation
            about technology, feel free to reach out. I'd be happy to hear from
            you.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* CONTACT INFORMATION */}
          <div className="pt-2">
            <h3 className="theme-text text-2xl font-bold transition-colors duration-300 md:text-3xl">
              Let's start a conversation.
            </h3>

            <p className="theme-muted mt-4 max-w-md leading-8 transition-colors duration-300">
              I'm interested in meaningful projects, collaboration, and
              opportunities to keep growing as a developer, particularly in
              backend and full-stack development.
            </p>

            {/* EMAIL */}
            <div className="mt-9 flex items-start gap-4">
              <div className="theme-card theme-border flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xl shadow-sm">
                <span aria-hidden="true">✉</span>
              </div>

              <div>
                <p className="theme-muted text-sm font-medium">Email</p>
                <a
                  href="mailto:vicadams4real@gmail.com"
                  className="theme-text mt-1 inline-block break-all font-semibold transition-colors hover:text-primary"
                >
                  vicadams4real@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="mt-6 flex items-start gap-4">
              <div className="theme-card theme-border flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xl shadow-sm">
                <span aria-hidden="true">☎</span>
              </div>

              <div>
                <p className="theme-muted text-sm font-medium">Phone</p>
                <a
                  href="tel:+2347038682111"
                  className="theme-text mt-1 inline-block font-semibold transition-colors hover:text-primary"
                >
                  +2347038682111
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-6 flex items-start gap-4">
              <div className="theme-card theme-border flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xl shadow-sm">
                <span aria-hidden="true">⌖</span>
              </div>

              <div>
                <p className="theme-muted text-sm font-medium">Location</p>
                <p className="theme-text mt-1 font-semibold">Lagos, Nigeria</p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="theme-border mt-10 border-t pt-7">
              <p className="theme-text text-sm font-semibold">Find me online</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Vikitek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-card theme-border theme-text rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:border-violet-300 hover:bg-violet-50 hover:text-primary dark:hover:border-[#6558e8] dark:hover:bg-[#29243f] dark:hover:text-[#a78bfa]"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/victor-adams-0a3b4c/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-card theme-border theme-text rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:border-violet-300 hover:bg-violet-50 hover:text-primary dark:hover:border-[#6558e8] dark:hover:bg-[#29243f] dark:hover:text-[#a78bfa]"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="theme-card theme-border rounded-3xl border p-6 shadow-xl shadow-violet-100/50 transition-colors duration-300 dark:shadow-violet-950/20 md:p-8 lg:p-10">
            <div className="mb-7">
              <h3 className="theme-text text-xl font-bold transition-colors duration-300 md:text-2xl">
                Send me a message
              </h3>

              <p className="theme-muted mt-2 text-sm leading-6">
                Fill in the form below and I'll get back to you.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40"
              >
                <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                  Message sent successfully!
                </p>

                <p className="mt-1 text-sm leading-6 text-emerald-700 dark:text-emerald-400">
                  Thanks for reaching out. Your message has been submitted.
                </p>
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div
                role="alert"
                className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/40"
              >
                <p className="font-semibold text-red-800 dark:text-red-300">
                  We couldn't send your message.
                </p>

                <p className="mt-1 text-sm leading-6 text-red-700 dark:text-red-400">
                  {error}
                </p>
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="theme-text mb-2 block text-sm font-semibold"
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  minLength={2}
                  maxLength={100}
                  required
                  className={inputClass}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="theme-text mb-2 block text-sm font-semibold"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  maxLength={254}
                  required
                  className={inputClass}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="theme-text mb-2 block text-sm font-semibold"
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about what you have in mind..."
                  minLength={10}
                  maxLength={5000}
                  required
                  className={`${inputClass} resize-y`}
                />

                <p className="theme-muted mt-2 text-right text-xs">
                  {formData.message.length}/5000 characters
                </p>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-white shadow-md shadow-indigo-200 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 dark:shadow-indigo-950/40"
              >
                {isSending ? "Sending message..." : "Send Message"}
                {!isSending && <span aria-hidden="true">→</span>}
              </button>

              <p className="theme-muted text-center text-xs leading-5">
                Your message will be sent securely to the contact service
                configured for this portfolio.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
