"use client";

import { FaBars, FaUser } from "react-icons/fa";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-30 opacity-0">
      <div className="flex items-center justify-between mx-[5vh] my-[1vh] text-white font-bold">
        <div className="flex items-center gap-3">
          <Link
            href={"/"}
            className="font-bold text-white text-4xl h-[3.75rem] w-[7.5rem] tracking-wider mr-5"
          >
            mate <span className="block ml-5 -mt-3">libre</span>
          </Link>

          <button className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-white/30 hover:bg-white/70 transition-colors duration-300 p-2 mr-[2vh]">
            <FaBars className="w-[20px] h-[20px]" />
          </button>
          <button className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
            build your box
          </button>
        </div>

        <nav className="flex items-center gap-3">
          <Link
            href={"#"}
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            products
          </Link>
          <Link
            href={"#"}
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            explore
          </Link>
          <Link
            href={"#"}
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            community
          </Link>
          <button className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-white/30 hover:bg-white/70 transition-colors duration-300 p-2">
            <FaUser className="size-[20px]" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
