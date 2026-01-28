import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#171d32] backdrop-blur-md text-white px-10 md:px-20 py-5 z-50 border-b border-white/10">

      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <span className="text-xl font-bold tracking-wide">Portfolio</span>


        {/* Menu Items */}
        <ul
          className={`${
            open ? "block" : "hidden"
          } absolute md:static left-0 top-16 w-full md:w-auto bg-[#171d32] md:bg-transparent 
          md:flex md:items-center gap-8 font-semibold py-4 md:py-0 text-center`}
        >
          <li><a href="#About" className="block py-2 hover:opacity-70">About</a></li>
          <li><a href="#Skills" className="block py-2 hover:opacity-70">Skills</a></li>
          <li><a href="#Projects" className="block py-2 hover:opacity-70">Projects</a></li>
          <li><a href="#Footer" className="block py-2 hover:opacity-70">Contact</a></li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {open ? (
            <RiCloseLine size={32} className="cursor-pointer" onClick={() => setOpen(false)} />
          ) : (
            <RiMenu2Line size={32} className="cursor-pointer" onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;