import React from "react";
import aboutImg from "../../assets/about.png";

const About = () => {
  return (
    <div id="About" className="text-white flex flex-col md:flex-row items-center justify-between 
                    bg-black bg-opacity-30 shadow-xl mx-4 md:mx-20 rounded-lg p-10 mt-20">

      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-10">
        <img
          src={aboutImg}
          alt="about"
          className="w-72 md:w-96 object-contain"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">

        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
         Hi, I’m Ankita Yadav from Andheri. I have completed my graduation from Tolani College of Commerce. I’m familiar with HTML, CSS, JavaScript, React JS, and have basic knowledge of Tailwind CSS and Bootstrap. I enjoy front-end development and building real-world projects.
        </p>

      </div>
    </div>
  );
};

export default About;