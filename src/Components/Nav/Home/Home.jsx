import React from "react";
import mygirl from "../../../assets/mygirl.png";
import TextChange from "../../TextChange";

const Home = () => {
  return (
    <section
      id="home"
      className="
        w-full 
        flex flex-col md:flex-row 
        items-center justify-between 
        px-6 md:px-20 
        bg-gradient-to-b from-[#0a0e1a] to-[#0f1629]
        
        /* MOBILE HEIGHT FIX */
        h-auto md:min-h-screen
        pt-10 md:pt-0
      "
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-3 mt-4 md:mt-0 w-full md:w-1/2">

        {/* FIXED HEIGHT HEADING */}
        <h1 className="text-3xl md:text-5xl font-bold text-white h-16 md:h-28 flex items-center leading-tight">
          <TextChange />
        </h1>

        <p className="text-gray-300 text-base md:text-lg max-w-md">
    

      “Front-end developer in the making-learning, building, and improving every day.”

        </p>

        {/* SMALL BUTTON */}
        <button className="mt-2 text-white py-1.5 px-4 text-xs md:text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-fit">
          Contact Me
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-6">
        <img
          src={mygirl}
          alt="Hero"
          className="w-52 md:w-[420px] drop-shadow-xl select-none 
                     mt-2 md:mt-6"
        />
      </div>
    </section>
  );
};

export default Home;