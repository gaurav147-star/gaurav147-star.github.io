import React from "react";
import { motion } from "framer-motion";
import Skills from "../../components/Skills";
import ME from "../../assets/me.jpeg"; // Ensure this matches user's file structure or use a placeholder
import AnimatedPage from "../../components/AnimatedPage";

const About = () => {
  return (
    <AnimatedPage>
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        {/* Image Section */}
        <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative flex justify-center"
        >
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[6px] border-neon-blue/30 shadow-[0_0_80px_rgba(0,243,255,0.4)] relative z-10 group">
                <div className="absolute inset-0 bg-neon-purple/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                <img src={ME} alt="Gaurav Gupta" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-10 w-20 h-20 bg-neon-purple rounded-full blur-[50px] opacity-60" />
            <div className="absolute bottom-0 left-10 w-32 h-32 bg-neon-blue rounded-full blur-[60px] opacity-50" />
        </motion.div>

        {/* Text Section - Glassmorphism */}
        <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-glass"
        >
          <div>
              <p className="text-neon-pink text-[16px] uppercase tracking-wider font-semibold mb-2">Introduction</p>
              <h2 className="text-white text-[50px] font-bold leading-tight font-sans">Overview.</h2>
          </div>
          
          <p className="text-gray-300 text-[17px] leading-[30px] font-light">
            I am a <span className="text-neon-blue font-bold">Full-stack Developer</span> with expertise across frontend, backend, databases, DevOps, and <span className="text-neon-purple font-bold">GenAI-driven automation</span>. 
            I have built real-time apps and high-scale fintech platforms, backed by open-source contributions and strong product-focused engineering.
            Skilled in <span className="text-white font-medium">Python, C++, JavaScript</span> and stacks like <span className="text-white font-medium">MERN, Django, and Next.js</span>.
            My work includes boosting KYC accuracy by 75% using Gemini and engineering scalable mutual fund analysis systems.
          </p>
          
          <div className="mt-6 border-l-4 border-neon-pink pl-4">
              <h3 className="text-white text-xl font-bold">Key Achievements</h3>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li><span className="text-neon-blue">Department Rank 1</span> in B.Tech (1st Sem, SGPA 9.5/10)</li>
                  <li><span className="text-neon-purple">Runner-up</span> at SBNRI Hackathon (Repatriation System)</li>
              </ul>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a 
                href="https://drive.google.com/file/d/1esY7IVAOfREdDpaaJNemXrRPgr1CPKmm/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold shadow-glow hover:scale-105 transition-all duration-300 border border-white/20"
            >
                Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Skills />
      </motion.div>
    </div>
    </AnimatedPage>
  );
};

export default About;
