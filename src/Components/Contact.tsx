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
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-navy placeholder:text-slate-400 outline-none transition focus:border-primary focus:ring-4 focus:ring-violet-100";

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-violet-50/50 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Get in Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
            Have something
            <span className="block text-primary">in mind?</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether it's a development opportunity, a project, or a conversation
            about technology, feel free to reach out. I'd be happy to hear from
            you.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* CONTACT INFORMATION */}
          <div className="pt-2">
            <h3 className="text-2xl font-bold text-navy md:text-3xl">
              Let's start a conversation.
            </h3>

            <p className="mt-4 max-w-md leading-8 text-slate-600">
              I'm interested in meaningful projects, collaboration, and
              opportunities to keep growing as a developer, particularly in
              backend and full-stack development.
            </p>

            {/* EMAIL */}
            <div className="mt-9 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm ring-1 ring-slate-200">
                <span aria-hidden="true">✉</span>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Email</p>
                <a
                  href="mailto:vicadams4real@gmail.com"
                  className="mt-1 inline-block break-all font-semibold text-navy transition hover:text-primary"
                >
                  vicadams4real@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm ring-1 ring-slate-200">
                <span aria-hidden="true">☎</span>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Phone</p>
                <a
                  href="tel:+2348032787704"
                  className="mt-1 inline-block font-semibold text-navy transition hover:text-primary"
                >
                  +234 803 278 7704
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm ring-1 ring-slate-200">
                <span aria-hidden="true">⌖</span>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Location</p>
                <p className="mt-1 font-semibold text-navy">Lagos, Nigeria</p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-10 border-t border-slate-200 pt-7">
              <p className="text-sm font-semibold text-navy">
                Find me online
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Vikitek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-primary"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/victor-adams-0a3b4c/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-primary"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-violet-100/50 md:p-8 lg:p-10">
            <div className="mb-7">
              <h3 className="text-xl font-bold text-navy md:text-2xl">
                Send me a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in the form below and I'll get back to you.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
              >
                <p className="font-semibold text-emerald-800">
                  Message sent successfully!
                </p>
                <p className="mt-1 text-sm leading-6 text-emerald-700">
                  Thanks for reaching out. Your message has been submitted.
                </p>
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div
                role="alert"
                className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4"
              >
                <p className="font-semibold text-red-800">
                  We couldn't send your message.
                </p>
                <p className="mt-1 text-sm leading-6 text-red-700">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-navy"
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
                  className="mb-2 block text-sm font-semibold text-navy"
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
                  className="mb-2 block text-sm font-semibold text-navy"
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

                <p className="mt-2 text-right text-xs text-slate-400">
                  {formData.message.length}/5000 characters
                </p>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-white shadow-md shadow-indigo-200 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSending ? "Sending message..." : "Send Message"}
                {!isSending && <span aria-hidden="true">→</span>}
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
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