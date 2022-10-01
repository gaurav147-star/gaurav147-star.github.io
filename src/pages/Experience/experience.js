import React from "react";
import { exp } from "../../assets/data/experience";

const Experience = () => {
  return (
    <div class="container w-full mb-20 md:h-full lg:w-2/5 mx-auto flex flex-col mt-[30px] md:mt-[50px]">
      <h1 className="flex items-center justify-center mb-[20px] text-white text-5xl font-semibold">
        Exper <span className="text-[#ff7700]"> ience</span>
      </h1>
      {exp.map((item) => (
        <div
          v-for="card in cards"
          key={item.id}
          class="flex flex-col md:flex-row overflow-hidden
                                      bg-white rounded-lg shadow-xl  mt-4 w-100 hover:scale-110 hover:duration-500 hover:ease-in-out"
        >
          <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
            <h3 class="font-semibold text-lg leading-tight truncate">
              {item.position}
            </h3>
            <p class="font-semibold text-[0.9rem] pt-1 leading-tight truncate">
              {item.title}
            </p>
            <p class="mt-2">{item.desc}</p>
            <p class="text-sm text-gray-500 uppercase tracking-wide font-semibold mt-2">
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
