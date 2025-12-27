import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { exp } from "../../assets/data/experience";
import AnimatedPage from "../../components/AnimatedPage";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

 const ExperienceCard = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);
  const visiblePoints = expanded ? experience.desc : experience.desc.slice(0, 2);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(255, 255, 255, 0.05)",
        color: "#fff",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.05)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg || "#030014" }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden bg-black-100 border-2 border-neon-blue/20">
          <img
            src={require(`../../assets/${experience.image}.png`)}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div className="text-left">
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-neon-blue text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.position} at {experience.location}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 text-left">
        {visiblePoints.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-gray-300 text-[14px] pl-1 tracking-wider leading-relaxed">
                {point}
            </li>
        ))}
      </ul>
      
      {experience.desc.length > 2 && (
        <button 
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-neon-blue text-sm flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
        >
          {expanded ? (
            <>Show Less <FiChevronUp /></>
          ) : (
            <>Read More ({experience.desc.length - 2} more) <FiChevronDown /></>
          )}
        </button>
      )}

       <div className="mt-6">
            <h4 className="text-[14px] font-semibold text-gray-400 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <span key={idx} className="text-[12px] bg-neon-purple/10 border border-neon-purple/30 px-2 py-1 rounded-full text-neon-purple font-medium">
                    {skill}
                  </span>
                ))}
            </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <AnimatedPage>
    <div className="min-h-screen pt-24 pb-10 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[18px] text-neon-pink uppercase tracking-wider mb-2">What I have done so far</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] drop-shadow-lg">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {exp.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
    </AnimatedPage>
  );
};

export default Experience;
