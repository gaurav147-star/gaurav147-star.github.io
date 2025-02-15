import React from "react";

const ContactIcon = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <div className="social-icon-wrapper">
      <a href="/" className="
        w-8 h-8
        flex items-center justify-center
        rounded-full
        transition-all duration-500
        hover:shadow-lg hover:-translate-y-1
        hover:shadow-black/20
      ">
        <i className={`fas fa-${icon} text-white/95`} />
      </a>
    </div>
    <p className="mt-2.5 text-sm md:text-base text-white font-['Play']">
      {text}
    </p>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="
      w-10 h-10
      flex items-center justify-center
      bg-white/90 rounded-full
      mx-3 mb-8
      transition-all duration-500
      hover:bg-black hover:shadow-lg
      hover:-translate-y-1 hover:shadow-black/20
      group
    "
  >
    <i className={`
      fab fa-${icon} fa-lg
      text-black
      group-hover:text-white
      transition-colors duration-500
    `} />
  </a>
);

const SOCIAL_LINKS = [
  { href: "https://github.com/gaurav147-star", icon: "github" },
  { href: "https://twitter.com/GauGupta147", icon: "twitter" },
  { href: "https://www.instagram.com/gaurav07gupta/", icon: "instagram" },
  { href: "https://www.linkedin.com/in/gaurav-gupta-b913aa202/", icon: "linkedin" }
];

const Contact = () => {
  return (
    <footer className="
      min-h-[280px]
      flex flex-col items-center justify-center
      bg-[#07090E]
      px-4 py-6 md:py-8
      space-y-4 md:space-y-6
    ">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          FIND ME ON
        </h2>
        <p className="mt-2 text-base md:text-lg text-white">
          Feel free to <span className="text-[#ff7700]">connect</span> with me
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
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
      <div className="flex items-center justify-center flex-wrap">
        {SOCIAL_LINKS.map((link) => (
          <SocialLink 
            key={link.icon} 
            {...link} 
          />
        ))}
      </div>

      {/* Copyright */}
      <p className="text-white/70 text-xs md:text-sm text-center">
        Copyright © {new Date().getFullYear()} Gaurav Gupta. All rights reserved
      </p>
    </footer>
  );
};

export default Contact;