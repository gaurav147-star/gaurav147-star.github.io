import React, { useState } from "react";
import { AllProjects } from "../../assets/data/projects";
import { FiGithub, FiExternalLink, FiCpu } from "react-icons/fi";
import { GiPowerButton } from "react-icons/gi";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative group
        ${index % 3 === 0 ? 'lg:mt-12' : index % 3 === 1 ? 'lg:mt-24' : 'lg:mt-0'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="
        relative overflow-hidden
        bg-gradient-to-br from-gray-900/80 to-gray-950/90
        backdrop-blur-md
        rounded-2xl
        border-2 border-orange-500/20
        transition-all duration-500 ease-out
        hover:scale-105 hover:border-orange-500/50
        group-hover:shadow-[0_0_30px_-5px] group-hover:shadow-orange-500/30
      ">
        {/* Cyber Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-orange-500/50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-orange-500/50" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-orange-500/50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-orange-500/50" />

        {/* Project Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
          <img
            src={require(`../../assets/${project.image}.png`)}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          
          {/* Power Button Overlay */}
          <div className={`
            absolute inset-0 
            flex items-center justify-center
            bg-gray-900/80 backdrop-blur-sm
            transition-opacity duration-500
            ${isHovered ? 'opacity-0' : 'opacity-100'}
          `}>
            <GiPowerButton className="text-6xl text-orange-500 animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <FiCpu className="text-orange-500 animate-spin-slow" />
            <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tag.map((tech, idx) => (
              <span
                key={idx}
                className="
                  px-3 py-1 text-xs
                  rounded-lg
                  bg-orange-500/10
                  text-orange-400
                  border border-orange-500/20
                  uppercase tracking-wider
                  hover:scale-105 hover:bg-orange-500/20
                  transition-all duration-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="
            pt-4 border-t border-orange-500/20
            flex justify-end space-x-4
          ">
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="
                p-2 rounded-lg
                bg-orange-500/10 hover:bg-orange-500/20
                text-orange-500
                transition-all duration-300
                hover:scale-110
                z-10
              "
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href={project.site_link}
              target="_blank"
              rel="noreferrer"
              className="
                p-2 rounded-lg
                bg-orange-500/10 hover:bg-orange-500/20
                text-orange-500
                transition-all duration-300
                hover:scale-110
                z-10
              "
            >
              <FiExternalLink className="text-xl" />
            </a>
          </div>
        </div>
        {/* Glowing Effect */}
        <div className={`
          absolute inset-0 
          bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0
          transition-opacity duration-1000
          ${isHovered ? 'opacity-100' : 'opacity-0'}
          animate-gradient-x
          -z-10
        `} />

      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-950 px-4 py-16 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="
        absolute inset-0 
        bg-[linear-gradient(rgba(255,119,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,119,0,0.1)_1px,transparent_1px)]
        bg-[size:40px_40px]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]
      " />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="
            inline-flex items-center justify-center
            px-6 py-2 space-x-2
            bg-orange-500/10
            border border-orange-500/20
            rounded-full
          ">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-500 text-sm uppercase tracking-wider">
              System Online
            </span>
          </div>
          
          <h1 className="
            text-4xl md:text-6xl font-bold
            bg-gradient-to-r from-orange-500 via-white to-orange-500
            text-transparent bg-clip-text
            animate-gradient-x
          ">
            Project Matrix
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-8 md:gap-6 lg:gap-8
        ">
          {AllProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;