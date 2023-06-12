import React from "react";
import ME from "../../assets/me.jpeg";
import Techstack from "../../components/Techstack";
import Toolstack from "../../components/Toolstack";

const About = () => {
  return (
    <div className="w-full h-fit py-16 px-4">
      <div className="max-w-[1240] lg:mt-[150px] md:mt-[80px] grid md:grid-cols-2">
        <div className="w-full h-420 flex items-center justify-center">
          <div className="w-275 h-340">
            <img
              src={ME}
              alt=""
              className="w-[500px] lg:h-[500px] mx-auto my-4 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" flex flex-col justify-center items-center lg:m-[100px] md:m-[30px]">
            <h2 className="font-bold text-4xl text-white italic md:not-italic">
              {" "}
              Hello,
            </h2>
            <p className="text-[1.4rem] text-lg text-[#ff7700] text-justify font-semibold  italic md:not-italic">
              {" "}
              I am Gaurav Gupta and I am currently pursuing a B.Tech with an
              emphasis in Information Technology at IIIT Bhopal.
            </p>
            <p className=" text-[1.4rem] text-lg text-textBase text-justify text-white	font-medium italic md:not-italic">
              {" "}
              I am the web development lead of Codame Club at IIIT Bhopal.
              Besides being the Club Secretary of the GNU/Linux Users Club at
              IIIT Bhopal, I am also a member of the Web Development Team at
              Codame Club IIIT Bhopal. My ability to understand and identify
              trending patterns and developments comes from my passion for
              learning. I am fascinated by workplaces with positive and
              productive atmospheres, as well as strong team morale. This
              motivates me to work hard and put in extra effort every day as a
              dedicated team member. I enjoy listening to people's ideas and
              possess good communication skills.
            </p>
            <a
              href="https://drive.google.com/file/d/1esY7IVAOfREdDpaaJNemXrRPgr1CPKmm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button class="rounded mt-4 px-3 py-2 text-[#ff7700] hover:border-0 outline-0 hover:outline-0 hover:bg-gradient-to-r from-[#ff7700] to-white duration-300 text-[1.1rem] font-semibold border-2 hover:text-black">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center text-white text-3xl my-3">
        Professional <strong className="text-[#ff7700]">Skillset </strong>
      </h1>
      <Techstack />
      <h1 className="text-center text-white text-3xl my-3">
        <strong className="text-[#ff7700]">Tools</strong> I use
      </h1>
      <Toolstack />
    </div>
  );
};

export default About;
