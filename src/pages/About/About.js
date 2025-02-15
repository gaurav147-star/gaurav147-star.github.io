import React from "react";
import ME from "../../assets/me.jpeg";
import Techstack from "../../components/Techstack";
import Toolstack from "../../components/Toolstack";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const SectionTitle = ({ primary, secondary }) => (
  <div className="flex flex-col items-center gap-2 mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      {primary} <span className="text-[#ff7700]">{secondary}</span>
    </h2>
    <div className="w-20 h-1 bg-gradient-to-r from-[#ff7700] to-white rounded-full" />
  </div>
);

const ResumeButton = () => (
  <a
    href="https://drive.google.com/file/d/1esY7IVAOfREdDpaaJNemXrRPgr1CPKmm/view?usp=sharing"
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2"
  >
    <button
      className="
      relative
      px-8 py-3
      text-[#ff7700]
      text-lg
      font-semibold 
      rounded-xl
      border-2 border-[#ff7700]
      overflow-hidden
      transition-all duration-300
      hover:text-white
      before:absolute
      before:inset-0
      before:bg-[#ff7700]
      before:translate-x-full
      before:transition-transform
      before:duration-300
      hover:before:translate-x-0
      before:-z-10
    "
    >
      <span className="flex items-center gap-3">
        Download CV
        <FiDownload
          className="
          transform transition-transform duration-300
          group-hover:translate-y-1
        "
        />
      </span>
    </button>
  </a>
);

const About = () => {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <section
          className="
          grid md:grid-cols-2 gap-16 items-center
          mb-32
        "
        >
          {/* Image Container */}
          <div className="relative order-1 md:order-2">
            <div
              className="
              relative
              max-w-[450px] mx-auto
              before:absolute before:-inset-4
              before:border-2 before:border-[#ff7700]/20
              before:rounded-2xl
              before:transition-all before:duration-300
              hover:before:border-[#ff7700]/40
              hover:before:-inset-6
            "
            >
              <img
                src={ME}
                alt="Gaurav Gupta"
                className="
                  w-full aspect-square
                  object-cover
                  rounded-xl
                  transition duration-500
                  hover:transform hover:scale-[1.02]
                  hover:shadow-2xl hover:shadow-[#ff7700]/20
                "
              />

              {/* Decorative Elements */}
              <div
                className="
                absolute -bottom-6 -right-6
                w-24 h-24
                border-2 border-[#ff7700]
                rounded-xl
                -z-10
              "
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="order-2 md:order-1">
            <div className="space-y-8 max-w-xl">
              <div>
                <h1
                  className="
                  text-4xl md:text-5xl font-bold text-white
                  mb-4
                "
                >
                  About <span className="text-[#ff7700]">Me</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[#ff7700] to-white rounded-full" />
              </div>

              <div className="space-y-6">
                {/* Introduction */}
                <h2 className="text-3xl font-bold text-white">
                  Hi, I'm <span className="text-[#ff7700]">Gaurav Gupta</span>{" "}
                  👋
                </h2>

                {/* Current Role */}
                <p className="text-xl text-white/70 leading-relaxed">
                  A Software Developer at{" "}
                  <span className="text-[#ff7700] font-semibold">SBNRI</span>,
                  specializing in AI integration and full-stack development. I
                  create impactful fin-tech solutions using AI models and GCP
                  Document AI.
                </p>

                {/* Experience & Leadership */}
                <p className="text-lg text-white/70 leading-relaxed">
                  Previously led web development at CODAME and served as Club
                  Secretary for GNU/Linux Users Club, mentoring 100+ students.
                  My experience spans backend development at SBNRI and React
                  development at AwesomeSuite.
                </p>

                {/* Skills & Traits */}
                <p className="text-lg text-white/70 leading-relaxed">
                  Passionate about continuous learning and problem-solving, I
                  thrive in collaborative environments. My adaptability and
                  strong communication skills make me an effective team player
                  in dynamic development settings.
                </p>
              </div>

              <ResumeButton />
            </div>
          </div>
        </section>

        {/* Skills Sections */}
        <section className="space-y-24">
          <div>
            <SectionTitle primary="Professional" secondary="Skillset" />
            <Techstack />
          </div>

          <div>
            <SectionTitle primary="Tools" secondary="I use" />
            <Toolstack />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
