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

    // Check the API URL being used by the frontend
    console.log("API URL:", import.meta.env.VITE_API_URL);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      console.log("Server response:", data);

      if (response.ok) {
        setSubmitted(true);
        setError("");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setError("Unable to send your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-20 bg-[#0f0f17]">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Contact Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Let's build
            <span className="block text-primary">something great.</span>
          </h2>

          <p className="mt-6 text-lg text-muted leading-8 max-w-2xl">
            Have a project in mind, an opportunity you'd like to discuss, or
            simply want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-16">
          {/* CONTACT INFORMATION */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Get in touch</h3>

            <p className="mt-4 text-muted leading-7 max-w-md">
              I'm open to opportunities, collaborations, freelance projects and
              conversations around technology and web development.
            </p>

            {/* EMAIL */}
            <div className="mt-10">
              <p className="text-sm text-muted">Email</p>

              <a
                href="mailto:vicadams4real@gmail.com"
                className="inline-block mt-2 text-lg font-semibold text-white hover:text-primary hover:underline transition"
              >
                vicadams4real@gmail.com
              </a>
            </div>

            {/* PHONE */}
            <div className="mt-7">
              <p className="text-sm text-muted">Phone</p>

              <p className="mt-2 text-lg font-semibold">+2348032787704</p>
            </div>

            {/* LOCATION */}
            <div className="mt-7">
              <p className="text-sm text-muted">Location</p>

              <p className="mt-2 text-lg font-semibold">Lagos, Nigeria</p>
            </div>

            {/* SOCIALS */}
            <div className="mt-10">
              <p className="text-sm text-muted mb-4">Connect with me</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Vikitek"
                  className="px-5 py-2.5 border border-border rounded-full text-sm font-medium text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition duration-300"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/victor-adams-0a3b4c/"
                  className="px-5 py-2.5 border border-border rounded-full text-sm font-medium text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition duration-300"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="p-6 md:p-8 lg:p-10 rounded-3xl bg-[rgb(42,42,63)] border border-border">
            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div className="mb-7 p-4 rounded-2xl bg-accent border border-primary/30">
                <p className="font-semibold">Thanks for reaching out! 👋</p>

                <p className="text-sm text-muted mt-1">
                  Your message has been submitted successfully.
                </p>
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div className="mb-7 p-4 rounded-2xl bg-red-500/10 border border-red-500/30">
                <p className="font-semibold text-red-400">
                  Something went wrong ❌
                </p>

                <p className="text-sm text-muted mt-1">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3.5 bg-[#0f0f17] border border-border text-white
                  placeholder:text-gray-600 rounded-xl outline-none focus:border-primary focus:ring-2
                  focus:ring-primary/10 transition"
                />
              </div>

              {/* EMAIL */}
              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3.5 bg-[#0f0f17] border border-border text-white
                  placeholder:text-gray-600 rounded-xl outline-none focus:border-primary focus:ring-2
                  focus:ring-primary/10 transition"
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3.5 bg-[#0f0f17] border border-border text-white
                  placeholder:text-gray-600 rounded-xl outline-none focus:border-primary focus:ring-2
                  focus:ring-primary/10 transition resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full mt-7 px-6 py-3.5 bg-primary text-white rounded-full
                font-semibold hover:bg-primary-dark hover:-translate-y-0.5 transition duration-300"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
