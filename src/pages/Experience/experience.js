import React from "react";
import { exp } from "../../assets/data/experience";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const ExperienceCard = ({ item, index }) => (
  <div className="group">
    {/* Main Card */}
    <div
      className="
      relative
      grid md:grid-cols-[1fr,2fr]
      bg-neutral-900/50
      backdrop-blur-md
      rounded-2xl
      overflow-hidden
      border border-white/5
      transition-all duration-500
      hover:border-[#ff7700]/20
      hover:shadow-2xl hover:shadow-black/20
    "
    >
      {/* Left Section - Company Info */}
      <div
        className="
        relative
        p-8
        bg-gradient-to-br from-neutral-900 to-black
        flex flex-col
        border-r border-white/5
      "
      >
        {/* Company Logo */}
        {item.image && (
          <div
            className="
            w-16 h-16 mb-6
            p-2.5
            bg-white/5
            rounded-xl
            transition-transform duration-500
            group-hover:scale-110
          "
          >
            <img
              src={require(`../../assets/${item.image}.png`)}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <h3
          className="
          text-xl font-bold text-white mb-2
          group-hover:text-[#ff7700]
          transition-colors duration-300
        "
        >
          {item.position}
        </h3>

        <p className="text-white/60 font-medium">{item.title}</p>

        <div className="mt-auto pt-6 flex items-center gap-2 text-white/40">
          <FiMapPin className="text-[#ff7700]" />
          <span className="text-sm">{item.location}</span>
        </div>
      </div>

      {/* Right Section - Experience Details */}
      <div className="p-8 flex flex-col">
        <div className="flex-1">
          <p
            className="
            text-white/70 leading-relaxed
            mb-6
          "
          >
            {item.desc}
          </p>

          {/* Skills/Technologies */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, idx) => (
              <span
                key={idx}
                className="
                  px-3 py-1
                  text-sm
                  bg-white/5
                  rounded-full
                  text-white/60
                  border border-white/10
                  hover:border-[#ff7700]/30
                  transition-colors duration-300
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Date */}
        <div
          className="
          mt-6 pt-6
          border-t border-white/5
          flex items-center justify-between
        "
        >
          <div className="flex items-center gap-2 text-[#ff7700]">
            <FiCalendar />
            <span className="text-sm font-medium">{item.date}</span>
          </div>
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-r from-[#ff7700]/0 via-[#ff7700]/5 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        pointer-events-none
      "
      />
    </div>
  </div>
);

const Experience = () => {
  return (
    <section className="min-h-screen bg-neutral-950 px-4 md:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-20">
          <div
            className="
            inline-flex items-center gap-2
            px-4 py-2 mb-6
            bg-[#ff7700]/10
            rounded-full
            border border-[#ff7700]/20
          "
          >
            <FiBriefcase className="text-[#ff7700]" />
            <span className="text-sm text-[#ff7700] font-medium">
              Experience
            </span>
          </div>

          <h1
            className="
            text-4xl md:text-5xl lg:text-6xl
            font-bold text-white
            leading-tight
          "
          >
            My <span className="text-[#ff7700]">Journey</span>
          </h1>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 relative">
          {/* Timeline Line */}
          <div
            className="
            absolute left-8 top-0 bottom-0
            w-px
            bg-gradient-to-b from-[#ff7700]/0 via-[#ff7700]/20 to-[#ff7700]/0
          "
          />

          {exp.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
              
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
