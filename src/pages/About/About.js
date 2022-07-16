import React from "react";
import ME from "../../assets/me.jpeg";

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
            <h2 className="font-bold text-3xl text-[#ff7700]"> Hello,</h2>
            <p className="text-lg text-white text-center font-semibold">
              {" "}
              I am Gaurav Gupta and am currently pursuing a B.Tech with an
              emphasis in Information Technology at IIIT Bhopal.
            </p>
            <p className="text-lg text-textBase text-center text-[#ff7700eb]	font-medium">
              {" "}
              Besides being Club Secretary of the GNU/Linux Users Club IIIT
              Bhopal, I am also a member of the Codame Club IIIT Bhopal's Web
              Development Team. My knack for understanding and identifying
              trending patterns and developments comes from my passion to learn.
              I am fascinated by workplaces with positive and productive
              atmospheres, as well as team morale. In turn, this motivates me to
              work hard and put in extra effort every day as a loyal team
              member. I enjoy listening to people's ideas and have good
              communication skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
