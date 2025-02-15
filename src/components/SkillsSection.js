import React from "react";
import { 
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit 
} from "react-icons/di";
import { 
  SiFirebase, SiTailwindcss, SiTypescript, SiDocker, 
  SiLinux, SiVisualstudiocode, SiPostman, SiVercel,
  SiAmazonaws, SiGooglecloud, SiRedis, SiNginx
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const SkillIcon = ({ icon: Icon, name }) => (
  <div className="
    group
    flex flex-col items-center gap-2
    p-6 rounded-2xl
    min-w-[150px]
    bg-neutral-900/50
    border border-white/10
    transition-all duration-500
    hover:bg-[#ec5707]/10 
    hover:border-[#ec5707]/30
    hover:scale-110
    hover:-translate-y-2
    hover:shadow-xl hover:shadow-[#ec5707]/20
    cursor-pointer
    backdrop-blur-sm
  ">
    <Icon className="
      text-5xl text-white/70
      transition-all duration-500
      group-hover:text-[#ec5707]
      group-hover:scale-125
      group-hover:rotate-[360deg]
    "/>
    <span className="
      text-sm font-medium
      text-white/50
      transition-all duration-500
      group-hover:text-[#ec5707]
      opacity-0 group-hover:opacity-100
      transform translate-y-2 group-hover:translate-y-0
    ">
      {name}
    </span>
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 text-center">
    <h2 className="
      text-4xl font-bold text-white
      hover:scale-105 
      transition-transform duration-300
      cursor-default
    ">
      {title}{" "}
      <span className="
        text-[#ec5707]
        animate-pulse-slow
      ">
        {subtitle}
      </span>
    </h2>
  </div>
);

const InfiniteScroll = ({ items, direction = "left", speed = "fast" }) => {
  // Double the items for seamless loop
  const doubledItems = [...items, ...items];
  
  const speedClass = {
    slow: "animate-scroll-slow",
    medium: "animate-scroll-medium",
    fast: "animate-scroll-fast"
  }[speed];

  return (
    <div className="relative overflow-hidden py-8 select-none">
      <div className={`
        flex space-x-6
        ${direction === "left" ? speedClass : `${speedClass} animate-reverse`}
        hover:pause
      `}>
        {doubledItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex-shrink-0">
            <SkillIcon icon={item.icon} name={item.name} />
          </div>
        ))}
      </div>
      
      {/* Gradient Overlays */}
      <div className="
        absolute top-0 left-0 
        w-20 h-full
        bg-gradient-to-r from-black to-transparent
        pointer-events-none
        z-10
      "/>
      <div className="
        absolute top-0 right-0 
        w-20 h-full
        bg-gradient-to-l from-black to-transparent
        pointer-events-none
        z-10
      "/>
    </div>
  );
};

const SkillsSection = () => {
  const technologies = [
    { icon: DiJavascript1, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: DiReact, name: "React.js" },
    { icon: TbBrandNextjs, name: "Next.js" },
    { icon: DiNodejs, name: "Node.js" },
    { icon: DiPython, name: "Python" },
    { icon: DiMongodb, name: "MongoDB" },
    { icon: SiRedis, name: "Redis" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: DiGit, name: "Git" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiFirebase, name: "Firebase" }
  ];

  const tools = [
    { icon: SiAmazonaws, name: "AWS" },
    { icon: SiGooglecloud, name: "GCP" },
    { icon: SiLinux, name: "Linux" },
    { icon: SiNginx, name: "Nginx" },
    { icon: SiVisualstudiocode, name: "VS Code" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiVercel, name: "Vercel" }
  ];

  return (
    <section className="
      py-20 space-y-24
      bg-gradient-to-b from-black to-neutral-900
      relative
      overflow-hidden
    ">
      {/* Background Effects */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(236,87,7,0.1),transparent_70%)]
      "/>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Technologies */}
        <div className="space-y-8">
          <SectionTitle 
            title="Professional" 
            subtitle="Skillset" 
          />
          <InfiniteScroll items={technologies} direction="left" speed="fast" />
        </div>

        {/* Tools */}
        <div className="space-y-8 mt-20">
          <SectionTitle 
            title="Development" 
            subtitle="Tools" 
          />
          <InfiniteScroll items={tools} direction="right" speed="fast" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;