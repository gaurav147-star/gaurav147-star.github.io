import React from "react";
import { Link } from "react-router-dom";
import { AllProjects } from "../../assets/data/projects";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[50px] md:py-[50px] ">
      <h1 className="flex items-center justify-center mb-[50px] text-white text-5xl font-semibold">
        <span className="text-[#ff7700]"> Pr</span>oj{" "}
        <span className="text-[#ff7700]"> ec</span>ts
      </h1>
      <div class="flex flex-wrap items-center justify-center gap-4">
        {AllProjects.map((project) => (
          <div
            className=" flex flex-col p-2 m-2 transform rotate-[3deg] hover:rotate-0 duration-500 hover:border-2 hover:border-x-[#ff7700]"
            key={project.id}
          >
            <div className="bg-[#121316] rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
              <div>
                <img
                  src={`${require("../../assets/" + project.image + ".png")}`}
                  className="object-cover h-48 "
                  alt=""
                />
              </div>
              <div className="bg-[#121316] p-4 flex-1 flex flex-col">
                <h3 className="mb-4 text-2xl font-bold text-[#ff7700]">{project.title}</h3>
                <div className="mb-4 text-grey-darker text-sm flex-1">
                  <p className="text-[18px] font-semibold text-white">Technologies</p>
                  <div class="w-[300px] py-3 flex flex-wrap  ">
                    {project.tag.map((tags) => (
                      <div class=" bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 uppercase">
                        {tags}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-grey-light pt-2 flex justify-around">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className=" text-xs text-grey hover:text-red uppercase no-underline tracking-wide cursor-pointer text-white"
                  >
                    Github
                  </a>
                  <a
                    href={project.site_link}
                    target="_blank"
                    rel="noreferrer"
                    className=" text-xs text-grey hover:text-red uppercase no-underline tracking-wide cursor-pointer text-white"
                  >
                    Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
