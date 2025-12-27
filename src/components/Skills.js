import React from "react";
import { motion } from "framer-motion";
import { 
  SiPython, SiPytorch, SiTensorflow, SiReact, SiNextdotjs, 
  SiTailwindcss, SiNodedotjs, SiDocker,
  SiPostgresql, SiOpenai, SiCplusplus, SiMysql, SiJavascript,
  SiGooglecloud, SiKubernetes, SiRedis
} from "react-icons/si";

const SkillCard = ({ name, icon: Icon, color }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ scale: 1.1, borderColor: color }}
    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group cursor-pointer"
  >
    <div className="relative">
        <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-300" style={{ backgroundColor: color }} />
        <Icon className="text-4xl relative z-10 transition-colors duration-300 group-hover:text-white" style={{ color: color }} />
    </div>
    <span className="text-gray-300 mt-3 text-sm font-medium tracking-wide group-hover:text-white text-center">{name}</span>
  </motion.div>
);

const SkillCategory = ({ title, skills, color }) => (
  <div className="flex-1 min-w-[300px] p-6 rounded-2xl bg-[#0a0a0a]/40 border border-white/5 hover:border-white/10 transition-colors">
    <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 border-l-4 pl-3" style={{ borderColor: color }}>
      {title}
    </h3>
    <div className="grid grid-cols-3 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      color: "#FFD700", // Gold
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "SQL", icon: SiMysql, color: "#4479A1" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ]
    },
    {
      title: "AI & GenAI",
      color: "#bc13fe", // Neon Purple
      skills: [
        { name: "GenAI / LLMs", icon: SiOpenai, color: "#412991" },
        { name: "RAG & LangChain", icon: SiPython, color: "#00ff9d" }, 
        { name: "LlamaIndex", icon: SiPython, color: "#ffffff" }, // Placeholder Icon
        { name: "Vector DBs", icon: SiPostgresql, color: "#336791" }, // Representing Chroma/Qdrant
        { name: "PEFT / LoRA", icon: SiPytorch, color: "#EE4C2C" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      ]
    },
    {
      title: "Full Stack",
      color: "#00f3ff", // Neon Blue
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Django", icon: SiPython, color: "#092E20" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
      ]
    },
    {
      title: "Cloud & DevOps",
      color: "#FF007F", // Neon Pink
      skills: [
        { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
      ]
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }
      }}
      className="mt-16 w-full flex flex-wrap gap-8 justify-center"
    >
      {categories.map((category) => (
        <SkillCategory key={category.title} {...category} />
      ))}
    </motion.div>
  );
};

export default Skills;
