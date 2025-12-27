import React from "react";
import { motion } from "framer-motion";

const ContactIcon = ({ icon, text }) => (
  <div className="flex items-center space-x-3 group cursor-pointer">
    <div className="social-icon-wrapper">
      <div className="
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-white/5 border border-white/10
        group-hover:bg-neon-blue/20 group-hover:border-neon-blue
        transition-all duration-300
        shadow-glass
      ">
        <i className={`fas fa-${icon} text-gray-300 group-hover:text-neon-blue transition-colors`} />
      </div>
    </div>
    <p className="text-sm md:text-base text-gray-300 font-medium group-hover:text-white transition-colors">
      {text}
    </p>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <motion.a
    whileHover={{ y: -5 }}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="
      w-12 h-12
      flex items-center justify-center
      bg-white/5 backdrop-blur-sm rounded-full
      mx-3 mb-8
      border border-white/10
      hover:bg-neon-purple/20 hover:border-neon-purple
      hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]
      transition-all duration-300
      group
    "
  >
    <i className={`
      fab fa-${icon} fa-lg
      text-gray-300
      group-hover:text-neon-purple
      transition-colors duration-300
    `} />
  </motion.a>
);

const SOCIAL_LINKS = [
  { href: "https://github.com/gaurav147-star", icon: "github" },
  { href: "https://twitter.com/GauGupta147", icon: "twitter" },
  { href: "https://www.instagram.com/gaurav07gupta/", icon: "instagram" },
  { href: "https://www.linkedin.com/in/gaurav-gupta-b913aa202/", icon: "linkedin" }
];

const Contact = () => {
  return (
    <footer 
      id="contact"
      className="
      min-h-[300px]
      flex flex-col items-center justify-center
      bg-[#030014]
      px-4 py-10
      space-y-8
      relative
      overflow-hidden
    ">
      {/* Background Glow */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
      <div className="absolute top-[-100px] bg-neon-purple/20 w-[500px] h-[200px] blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase font-mono">
          Find Me On
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-400">
          Feel free to <span className="text-neon-blue font-bold">connect</span> with me
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 z-10">
        <ContactIcon 
          icon="phone" 
          text="+91 9993009441" 
        />
        <ContactIcon 
          icon="envelope" 
          text="gauravgupta9158@gmail.com" 
        />
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center flex-wrap pt-4 z-10">
        {SOCIAL_LINKS.map((link) => (
          <SocialLink 
            key={link.icon} 
            {...link} 
          />
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center z-10 border-t border-white/5 pt-8 w-full max-w-2xl">
        <p className="text-gray-500 text-xs md:text-sm">
          Copyright © {new Date().getFullYear()} Gaurav Gupta. <br className="md:hidden" />
          Made with <span className="text-neon-pink">♥</span> in the <span className="text-neon-blue">Cosmos</span>.
        </p>
      </div>
    </footer>
  );
};

export default Contact;