import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Typed from "typed.js";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Success: Message Sent Successfully! ✅");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus("Error: Contact server unreachable. Check if your Backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="min-h-screen bg-[#0a0f1a] text-white font-poppins relative overflow-x-hidden">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/20 blur-[120px] md:blur-[200px] top-10 left-10 rounded-full animate-pulse"></div>
        <div className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-500/20 blur-[120px] md:blur-[200px] bottom-10 right-10 rounded-full animate-pulse"></div>
      </div>

      <header className="fixed w-full px-6 md:px-10 py-4 md:py-5 flex justify-between items-center backdrop-blur-md bg-white/10 border-b border-white/10 z-50">
        <h1 className="text-xl md:text-3xl font-bold text-cyan-400 tracking-wide">PORTFOLIO</h1>
        <nav className="hidden md:flex space-x-8 text-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 pt-32 md:pt-20">
        
        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-10 md:mb-0">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-cyan-500/20" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h3 className="text-xl md:text-3xl text-gray-300">Hello, It's Me</h3>
          <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mt-2 leading-tight">Mauli Rana</h1>
          <h3 className="text-xl md:text-3xl mt-4">And I'm a <span className="typing text-cyan-400"></span></h3>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl leading-relaxed mx-auto md:mx-0">
            Passionate Frontend & Web Developer with 2+ years of experience. Skilled in HTML, CSS, JavaScript, Tailwind, React, and Node.js. ✨
          </p>
          
          <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 text-2xl md:text-3xl text-cyan-400 mt-6">
            {[FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin].map((Icon, i) => (
              <motion.a whileHover={{ scale: 1.2 }} key={i} href="#" className="hover:text-white transition"><Icon /></motion.a>
            ))}
          </div>
          <a href="#about" className="inline-block mt-8 md:mt-10 px-6 md:px-8 py-3 bg-cyan-400 text-black font-semibold rounded-xl shadow-xl hover:bg-white transition">More About Me</a>
        </motion.div>
      </section>

      <section id="about" className="py-20 px-6 md:px-10 bg-gray-900 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 md:mb-10">About Me</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        >
          I am a dedicated Frontend Developer who loves transforming ideas into visually appealing and functional websites. With strong problem‑solving abilities and creativity, I enjoy crafting smooth user experiences.
        </motion.p>
      </section>

      <section id="skills" className="py-20 px-6 md:px-10 bg-[#0a0f1a] text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 md:mb-10">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap", "Node.js", "Git"].map(
            (skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.15 }}
                className="p-4 md:p-6 bg-white/10 rounded-xl backdrop-blur-lg border border-white/20 shadow-md shadow-cyan-500/10 font-semibold text-sm md:text-base"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>
      <section id="projects" className="py-20 px-6 md:px-10 bg-gray-900 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 md:mb-10">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto text-left">
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
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg shadow-cyan-500/10 h-full"
            >
              <div className="h-40 md:h-44 bg-white/5 rounded-lg flex items-center justify-center text-lg text-gray-300 mb-4">
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

      <section id="contact" className="py-20 px-6 md:px-10 bg-[#0a0f1a] text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 md:mb-10">Connect Me</h2>

        <form
          className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-xl space-y-5 shadow-lg shadow-cyan-500/10"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-black/30 rounded-lg w-full outline-none border border-white/10 focus:border-cyan-400 transition"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-black/30 rounded-lg w-full outline-none border border-white/10 focus:border-cyan-400 transition"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="p-3 bg-black/30 rounded-lg w-full outline-none border border-white/10 focus:border-cyan-400 transition"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 font-semibold rounded-lg transition-all active:scale-95 ${
              isSubmitting 
                ? "bg-gray-600 cursor-not-allowed" 
                : "bg-cyan-400 text-black hover:bg-white"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className={`mt-4 text-sm font-medium ${status.startsWith("Error") ? "text-red-400" : "text-green-400"}`}>
              {status}
            </p>
          )}
        </form>
      </section>

    </div>
  );
}