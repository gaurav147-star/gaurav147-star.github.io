import React from "react";
import { ArrowRight as ArrowRightIcon } from "@mui/icons-material";
import Model from "../../assets/logo3.png";
import Typewriter from "../../components/Try";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/gaurav147-star",
    icon: "github",
    className: "hover:bg-[#222]"
  },
  {
    href: "https://twitter.com/GauGupta147",
    icon: "twitter",
    className: "hover:bg-[#4596d1]"
  },
  {
    href: "https://www.instagram.com/gaurav07gupta/",
    icon: "instagram",
    className: "hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-fuchsia-500"
  },
  {
    href: "https://www.linkedin.com/in/gaurav-gupta-b913aa202/",
    icon: "linkedin",
    className: "hover:bg-[#105abf]"
  }
];

const SocialIcon = ({ href, icon, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={`Visit ${icon} profile`}
    className={`
      w-10 h-10 md:w-[45px] md:h-[45px]
      flex justify-center items-center 
      bg-[#252525b5] rounded-full
      mx-2 md:mx-[17px] mb-6 md:mb-[30px]
      hover:shadow-lg hover:-translate-y-1
      transition-all duration-500 ease-in-out
      ${className}
    `}
  >
    <i className={`
      fab fa-${icon} text-base md:text-lg text-white
      transition-all duration-500
    `} />
  </a>
);

const Home = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 md:py-0">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Logo Section */}
          <div className="w-full max-w-[280px] md:max-w-[400px]">
            <img 
              src={Model} 
              alt="Personal logo" 
              className="w-full h-auto
                animate-bounce
                hover:scale-105
                transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center space-y-4">
            {/* Heading */}
            <h1 className="text-3xl md:text-[3.5em] text-white">
              Hello,
            </h1>
            <h1 className="text-3xl md:text-[3.5em] text-white">
              I&#8217;m <span className="text-[#ec5707] font-bold">Gaurav Gupta</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center text-[rgba(220,220,220,0.824)]">
              <ArrowRightIcon 
                className="text-2xl md:text-3xl"
              />
              <div className="text-base md:text-lg">
                <Typewriter />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center mt-4 md:mt-6">
              {SOCIAL_LINKS.map((link) => (
                <SocialIcon key={link.icon} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;