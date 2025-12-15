import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Typed from "typed.js";

export default function Portfolio() {

  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Frontend Developer", "React Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white font-poppins relative overflow-hidden">

      {/*  PREMIUM BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[200px] top-10 left-10 rounded-full animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[200px] bottom-10 right-10 rounded-full animate-pulse"></div>
      </div>

      {/*  NAVBAR */}
      <header className="fixed w-full px-10 py-5 flex justify-between items-center backdrop-blur-md bg-white/10 border-b border-white/10 z-50">
        <h1 className="text-3xl font-bold text-cyan-400 tracking-wide">PORTFOLIO</h1>
        <nav className="space-x-8 text-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition">
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/*  HOME SECTION */}
      <section id="home" className="h-screen flex items-center justify-between px-10 pt-20">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-1/2"
        >
          <h3 className="text-3xl text-gray-300">Hello, It's Me</h3>
          <h1 className="text-6xl font-extrabold text-cyan-400 mt-2">Mauli Rana</h1>

          <h3 className="text-3xl mt-4">
            And I'm a <span className="typing text-cyan-400"></span>
          </h3>

          <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
            Passionate Frontend & Web Developer with 2+ years of experience. Skilled in HTML, CSS, JavaScript, Tailwind, React, and Node.js. I love building clean, modern, responsive UI designs. ✨
          </p>

          {/* SOCIAL ICONS */}
          <motion.div className="flex space-x-6 text-3xl text-cyan-400 mt-6">
            {[FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin].map(
              (Icon, i) => (
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  key={i}
                  href="#"
                  className="hover:text-white transition"
                >
                  <Icon />
                </motion.a>
              )
            )}
          </motion.div>

          <a
            href="#about"
            className="inline-block mt-10 px-8 py-3 bg-cyan-400 text-black font-semibold rounded-xl shadow-xl hover:bg-white transition"
          >
            More About Me
          </a>
        </motion.div>

        {/* RIGHT GLASS BUBBLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-1/2 flex justify-center"
        >
          <div className="w-96 h-96 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-cyan-500/20" />
        </motion.div>
      </section>

      {/*  ABOUT SECTION */}
      <section id="about" className="py-24 px-10  bg-gray-900 text-center">
        <h2 className="text-5xl font-bold text-cyan-400 mb-10">About Me</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          I am a dedicated Frontend Developer who loves transforming ideas into visually appealing and functional websites. With strong problem‑solving abilities and creativity, I enjoy crafting smooth user experiences.
        </motion.p>
      </section>

      {/*  SKILLS */}
      <section id="skills" className="py-24 px-10 bg-[#0a0f1a] text-center">
        <h2 className="text-5xl font-bold text-cyan-400 mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap", "Node.js", "Git"].map(
            (skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.15 }}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-lg border border-white/20 shadow-md shadow-cyan-500/10 font-semibold"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-10  bg-gray-900 text-center">
        <h2 className="text-5xl font-bold text-cyan-400 mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Currency Exchange App",
              desc: "Real-time converter using Open Exchange API",
              tech: "React, Tailwind, Open API",
              label: "Currency App",
            },
            {
              title: "Advanced To-Do List",
              desc: "Search, priority, dark mode, local storage",
              tech: "HTML, CSS, JavaScript",
              label: "To-Do App",
            },
            {
              title: "Video Interview System",
              desc: "Real-time video calling using MERN + WebRTC",
              tech: "MERN, WebRTC, Socket.io",
              label: "Video Call",
            },
            
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg shadow-cyan-500/10"
            >
              <div className="h-44 bg-white/5 rounded-lg flex items-center justify-center text-lg text-gray-300 mb-4">
                {proj.label}
              </div>

              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{proj.desc}</p>

              <p className="mt-3 text-sm font-semibold text-cyan-400">
                Tech: {proj.tech}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      {/* <section id="contact" className="py-24 px-10 bg-[#0a0f1a] text-center">
        <h2 className="text-5xl font-bold text-cyan-400 mb-10">Contact</h2>
        <form className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl space-y-5 shadow-lg shadow-cyan-500/10">
          <input type="text" placeholder="Your Name" className="p-3 bg-black/30 rounded-lg w-full outline-none" />
          <input type="email" placeholder="Your Email" className="p-3 bg-black/30 rounded-lg w-full outline-none" />
          <textarea rows="5" placeholder="Your Message" className="p-3 bg-black/30 rounded-lg w-full outline-none" />
          <button className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-white transition">
            Send Message
          </button>
        </form>
      </section> */}
      {/* <section id="contact" className="py-24 px-10 bg-[#0a0f1a] text-center">
  <h2 className="text-5xl font-bold text-cyan-400 mb-10">Contact</h2>

  <form
    className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl space-y-5 shadow-lg shadow-cyan-500/10"
    onSubmit={(e) => {
      e.preventDefault(); // reload rokne ke liye

      const name = e.target.name.value;
      const email = e.target.email.value;
      const message = e.target.message.value;

      console.log("Form Data:", { name, email, message });

      alert("Message Sent Successfully!");
    }}
  >
    <input name="name" type="text" placeholder="Your Name" className="p-3 bg-black/30 rounded-lg w-full outline-none" />
    <input name="email" type="email" placeholder="Your Email" className="p-3 bg-black/30 rounded-lg w-full outline-none" />
    <textarea name="message" rows="5" placeholder="Your Message" className="p-3 bg-black/30 rounded-lg w-full outline-none" />

    <button
      type="submit"
      className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-white transition"
    >
      Send Message
    </button>
  </form>
</section> */}
<section id="contact" className="py-24 px-10 bg-[#0a0f1a] text-center">
  <h2 className="text-5xl font-bold text-cyan-400 mb-10">Contact</h2>

  <form
    className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl space-y-5 shadow-lg shadow-cyan-500/10"
    onSubmit={(e) => {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const message = e.target.message.value;

      console.log("Form Data:", { name, email, message });
      alert("Message Sent Successfully!");

      // Clear form after submit
      e.target.reset();
    }}
  >
    <input
      name="name"
      type="text"
      placeholder="Your Name"
      className="p-3 bg-black/30 rounded-lg w-full outline-none"
    />
    <input
      name="email"
      type="email"
      placeholder="Your Email"
      className="p-3 bg-black/30 rounded-lg w-full outline-none"
    />
    <textarea
      name="message"
      rows="5"
      placeholder="Your Message"
      className="p-3 bg-black/30 rounded-lg w-full outline-none"
    />

    <button
      type="submit"
      className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-white transition"
    >
      Send Message
    </button>
  </form>
</section>


    </div>
  );
}
