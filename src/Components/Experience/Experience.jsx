import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiGithub } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Skills" className="p-10 md:pt-20 md:pb-15">

      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Skills</h1>

      {/* MAIN WRAPPER */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full">

        {/* LEFT SIDE – Tech ICON GRID */}
        <div className="grid grid-cols-3 gap-8 p-5 bg-opacity-40 rounded-xl w-full md:w-[320px]">

          <span className="p-4 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <FaHtml5 color="#E34F26" size={50}/>
          </span>

          <span className="p-4 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <FaCss3 color="#1572B6" size={50}/>
          </span>

          <span className="p-4 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <FaJs color="#F7DF1E" size={50}/>
          </span>

          <span className="p-4 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <FaReact color="#61DAFB" size={50}/>
          </span>

          <span className="p-4 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <SiTailwindcss color="#38BDF8" size={50}/>
          </span>

          <span className="p-4 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <SiBootstrap color="#7952B3" size={50}/>
          </span>

          <span className="p-4 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <SiGithub color="white" size={50}/>
          </span>
        </div>

        {/* RIGHT SIDE – Skills / Experience CARD */}
        <div className="flex flex-col gap-6 w-full md:flex-1">

          <div className="flex gap-6 bg-slate-900 bg-opacity-50 rounded-xl p-6 items-start shadow-lg">
            <FaGitAlt color="#F1502F" size={30}/>
            <div className="text-white">
              <h2 className="text-lg font-semibold">Front-End Developer (Self Projects)</h2>
              <p className="text-sm text-gray-300">Jan 2025 – Present</p>
              <ul className="text-sm mt-2 leading-relaxed">
                <li>- Built projects using HTML, CSS, JavaScript</li>
                <li>- Learned Tailwind, Bootstrap & React basics</li>
                <li>- Created responsive UI designs</li>
                <li>- Worked with Git & GitHub</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6 bg-slate-900 bg-opacity-50 rounded-xl p-6 items-start shadow-lg">
            <FaReact color="#61DAFB" size={30}/>
            <div className="text-white">
              <h2 className="text-lg font-semibold">Personal Projects</h2>
              <ul className="text-sm mt-2 leading-relaxed">
                <li>- Amazon Homepage Clone</li>
                <li>- Myntra Clone</li>
                <li>- Sports Club Management System</li>
                <li>- YouTube Clone</li>
                <li>- Blogging Website</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experience;