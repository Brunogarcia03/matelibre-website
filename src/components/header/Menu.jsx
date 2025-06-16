"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import mateMenu from "@/assets/hero/mate-menu.webp";
import { FaX } from "react-icons/fa6";
import { FaAngleDown, FaUser } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = ({ open, setOpen }) => {
  const [subMenu, setSubMenu] = useState(false);

  useGSAP(() => {
    let tl = gsap.timeline({
      ease: "power2.out",
      onStart: () => {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      },
    });

    tl.from("#menu-white", { width: "0%", duration: 0.5 })
      .from("#menu-right", {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 0.7,
      })
      .from("#menu-link", { stagger: 0.3, x: "-150%", duration: 0.2 }, "<")
      .from("#menu-nav", { y: "-100%", duration: 0.5 }, "-=0.5")
      .from("#menu-image", { scale: 1.2 }, "<")
      .from("#menu-logo", { y: "-100%" }, "-=1  ");
  }, [open]);

  const closeHandle = () => {
    let tl = gsap.timeline({
      ease: "power2.out",
      onStart: () => setSubMenu(false),
      onComplete: () => {
        setOpen(false);
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
      },
    });

    tl.to("#menu-right", {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      duration: 0.7,
    })
      .to("#menu-link", { stagger: 0.3, x: "-150%", duration: 0.2 }, "<")
      .to("#menu-nav", { y: "-100%", duration: 0.5 }, "=")
      .to("#menu-image", { scale: 1.2 }, "<")
      .to("#menu-white", { width: "0%", duration: 0.4 })
      .to("#menu-logo", { y: "-100%", duration: 0.5 }, "-=1");
  };

  return (
    <div className="absolute flex items-center top-0 left-0 w-full h-screen z-[999]">
      <div
        id="menu-white"
        className="absolute overflow-hidden left-0 top-0 h-full bg-white w-[66.6%] rounded-r-[5%] z-[1000]"
      >
        <div
          id="menu-logo"
          className="flex items-center justify-start px-[4vh] py-[2vh]"
        >
          <Link
            href={"/"}
            className="font-bold text-black text-4xl h-[3.75rem] w-[7.5rem] tracking-wider mr-5"
          >
            mate <span className="block ml-5 -mt-3">libre</span>
          </Link>
          <button
            onClick={() => closeHandle()}
            className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full hover:bg-black/30 transition-colors duration-300 p-2 mr-[2vh]"
          >
            <FaX className="w-[20px] h-[20px]" />
          </button>
        </div>

        <div className="flex flex-col items-start justify-center px-[8vh] py-[5vh] w-full font-bold">
          <Link
            href="#"
            id="menu-link"
            className="text-size-menu flex items-center hover:text-black/30 h-[100px]"
          >
            products
          </Link>
          <button
            href="#"
            id="menu-link"
            className="text-size-menu flex items-center gap-1 hover:text-black/30 h-[100px]"
            onClick={() => setSubMenu((prev) => !prev)}
          >
            explore
            <FaAngleDown
              className={`text-size-h3 w-[2.5rem] h-[2.5rem] ml-3 transition-transform duration-300 ${
                subMenu ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <Link
            href="#"
            id="menu-link"
            className="text-size-menu flex items-center hover:text-black/30 h-[100px]"
          >
            community
          </Link>
        </div>

        <div
          className={`absolute bottom-0 flex gap-5 px-[8vh] py-[5vh] font-bold transition-transform duration-500 ease-out text-nowrap ${
            subMenu ? "translate-y-0" : "translate-y-[100%]"
          }`}
        >
          <Link
            href="#"
            id="menu-sublink"
            className="text-size-h4 hover:text-black/30"
          >
            yerba mate
          </Link>
          <Link
            href="#"
            id="menu-sublink"
            className="text-size-h4 hover:text-black/30"
          >
            our story
          </Link>
          <Link
            href="#"
            id="menu-sublink"
            className="text-size-h4 hover:text-black/30"
          >
            faq
          </Link>
        </div>
      </div>
      <div
        id="menu-right"
        className="absolute right-0 top-0 h-full w-[36.5%] object-center"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <Image
          id="menu-image"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          src={mateMenu}
          width={1000}
          height={700}
          alt="Image menu"
        />
        <div className="absolute inset-0 w-full h-full bg-black/20" />

        <nav
          id="menu-nav"
          className="flex items-center justify-end gap-3 font-bold text-white text-xl px-[4vh] py-[2vh] z-[1000]"
        >
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
          <button className="flex items-center justify-center w-[2.5rem] h-[2.5rem] ml-[2vh] rounded-full bg-white/30 hover:bg-white/70 transition-colors duration-300 p-2">
            <FaUser className="size-[20px]" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
