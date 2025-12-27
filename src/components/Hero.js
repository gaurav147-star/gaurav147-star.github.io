import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThinkingParticles from "./ThinkingParticles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <ThinkingParticles />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 relative"
      >
        {/* Glowing aura effect */}
        <div className="absolute -inset-10 bg-neon-blue/20 blur-[100px] rounded-full pointer-events-none" />
        
        <h1 className="text-white font-bold text-5xl sm:text-7xl leading-tight relative z-20 font-sans tracking-tight">
          Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple drop-shadow-lg filter">Gaurav</span>
        </h1>
        <div className="text-secondary text-xl sm:text-3xl mt-6 font-semibold font-mono">
          <span className="text-neon-pink mr-2">&gt;</span>
          <span className="text-white">I am a </span>
          <span className="text-neon-blue">
            <Typewriter
              words={["AI Engineer", "Full Stack Developer", "Data Scientist", "Prompt Engineer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        
        <p className="mt-8 text-gray-300 text-[16px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed border-l-2 border-neon-purple/50 pl-6 text-left bg-white/5 backdrop-blur-sm p-4 rounded-r-xl">
          Transforming complex data into intelligent solutions. 
          Specializing in <span className="text-neon-blue">Generative AI</span>, <span className="text-neon-purple">Large Language Models</span>, and scalable Web Architecture.
        </p>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex justify-center gap-6"
        >
             <Link to="/project" className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold shadow-glow hover:scale-105 transition-transform duration-300 border border-white/20">
                Explore Universe
             </Link>
             <a href="#contact" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-bold hover:bg-white/10 transition-colors duration-300">
                Contact Me
             </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 w-full flex justify-center"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-neon-blue mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
