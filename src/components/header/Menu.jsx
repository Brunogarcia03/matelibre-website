"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import mateMenu from "@/assets/hero/mate-menu.webp";
import { FaX } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

const Menu = ({ open, setOpen }) => {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from("#menu-white", { width: "0%", duration: 1 })
      .from("#menu-right", { width: "0%", duration: 1 }, "=-0.5")
      .from("#menu-image", { scale: 1.2 }, "<")
      .from("#menu-logo", { y: "-100%" }, "<");
  }, [open]);

  return (
    <div className="absolute flex items-center top-0 left-0 w-full h-screen z-[999]">
      <div
        id="menu-white"
        className="absolute left-0 top-0 h-full bg-white w-[66.6%] rounded-r-[5%] z-[1000]"
      >
        <div id="menu-logo" className="flex items-center justify-start p-[2vh]">
          <Link
            href={"/"}
            className="font-bold text-black text-4xl h-[3.75rem] w-[7.5rem] tracking-wider mr-5"
          >
            mate <span className="block ml-5 -mt-3">libre</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-black/30 hover:bg-black/70 transition-colors duration-300 p-2 mr-[2vh]"
          >
            <FaX className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
      <div
        id="menu-right"
        className="absolute right-0 top-0 h-full w-[36.5%] object-center"
      >
        <Image
          id="menu-image"
          className="absolute inset-0 w-full h-full"
          src={mateMenu}
          width={1000}
          height={700}
          alt="Image menu"
        />
        <div className="absolute inset-0 w-full h-full bg-black/20" />
      </div>
    </div>
  );
};

export default Menu;
