import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 md:pb-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>

      {/* ⭐ CARDS SAME LINE & CENTERED */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <ProjectCard
          title="Blogging Website"
          main="this is a blogging website created in next js and used some component library"
        />
        <ProjectCard
          title="YouTube Clone"
          main="this is a youtube clone created in next js and used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a netflix clone created in next js and used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;