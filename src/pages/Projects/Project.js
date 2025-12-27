import React, { useState } from "react";
import { AllProjects } from "../../assets/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPage from "../../components/AnimatedPage";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-md p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 hover:border-neon-blue/50 project-card-inner relative group shadow-glass"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
        <img
          src={require(`../../assets/${project.image}.png`)}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end p-3 gap-2">
          <div
            onClick={() => window.open(project.github_link, "_blank")}
            className="w-10 h-10 rounded-full bg-black/80 flex justify-center items-center cursor-pointer hover:bg-neon-blue hover:text-black transition-all"
          >
            <FiGithub className="text-white text-[20px] hover:text-black" />
          </div>
          {project.site_link && (
            <div
              onClick={() => window.open(project.site_link, "_blank")}
              className="w-10 h-10 rounded-full bg-black/80 flex justify-center items-center cursor-pointer ml-2 hover:bg-neon-purple hover:text-black transition-all"
            >
              <FiExternalLink className="text-white text-[20px] hover:text-black" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px] group-hover:text-neon-blue transition-colors">{project.title}</h3>
        <p className="mt-2 text-gray-300 text-[14px] leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
            {project.tag.map((tag, i) => (
                <span key={i} className="text-[12px] text-neon-blue bg-neon-blue/10 px-2 py-1 rounded-full border border-neon-blue/30">
                    #{tag}
                </span>
            ))}
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 blur transition duration-500 -z-10" />
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Dev", "Game Dev", "AI"];

  const filteredProjects =
    filter === "All"
      ? AllProjects
      : AllProjects.filter((p) => p.category.includes(filter));

  return (
    <AnimatedPage>
    <div className="min-h-screen pt-24 pb-10 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[18px] text-neon-blue uppercase tracking-wider mb-2">My Work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] drop-shadow-lg">
          Projects.
        </h2>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border font-medium transition-all duration-300 backdrop-blur-md ${
              filter === cat
                ? "bg-neon-blue/20 text-neon-blue border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                : "text-gray-400 border-white/10 hover:border-white/30 hover:text-white bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-7 justify-center">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
    </AnimatedPage>
  );
};

export default Projects;