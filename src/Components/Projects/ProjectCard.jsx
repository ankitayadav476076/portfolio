import React from "react";
import mount from "../../assets/mount.webp";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 flex flex-col w-48 h-60
                    bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-xl">

      <img className="p-2 h-24 object-cover rounded-md" src={mount} alt="" />

      <h3 className="px-2 text-lg font-bold mt-2">{title}</h3>

      {/* 👉 This will push buttons to the bottom and fix height */}
      <p className="px-2 text-xs leading-tight mt-1 flex-grow">
        {main}
      </p>

      <div className="mt-2 px-2 flex gap-2">
        <button className="text-white py-1 px-2 text-xs rounded-xl bg-[#465697]">
          Demo
        </button>
        <button className="text-white py-1 px-2 text-xs rounded-xl bg-[#465697]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;