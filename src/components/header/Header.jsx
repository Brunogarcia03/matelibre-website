"use client";

import { FaAngleDown, FaBars, FaUser } from "react-icons/fa";

import { useWindowScroll } from "@reactuses/core";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
import SubMenu from "./subMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  const { y: scrollY } = useWindowScroll();

  useGSAP(() => {
    const headerHeightValue = 50;

    if (scrollY < headerHeightValue) {
      gsap.to("#header-fixed", {
        y: "-100%",
        borderBottomLeftRadius: "32px",
        borderBottomRightRadius: "32px",
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });
    } else if (scrollY > headerHeightValue && scrollY >= prevScroll) {
      gsap.to("#header-fixed", {
        y: "-100%",
        borderBottomLeftRadius: "32px",
        borderBottomRightRadius: "32px",
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });
    } else if (scrollY > headerHeightValue && scrollY < prevScroll) {
      gsap.to("#header-fixed", {
        y: 0,
        borderBottomLeftRadius: "0%",
        borderBottomRightRadius: "0%",
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });
    }

    setPrevScroll(scrollY);
  }, [scrollY]);

  return (
    <header
      id="header-fixed"
      className="fixed top-0 left-0 w-full z-30 bg-white -translate-y-[100%]"
    >
      <div className="flex items-center justify-between px-[5vh] pt-[1vh] pb-[3vh] text-black font-bold">
        <div className="flex items-center gap-3">
          <Link
            href={"/"}
            className="font-bold text-black text-4xl h-[3.75rem] w-[7.5rem] tracking-wider mr-5"
          >
            mate <span className="block ml-5 -mt-3">libre</span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-black/30 hover:bg-black/70 transition-colors duration-300 p-2 mr-[2vh]"
          >
            <FaBars className="w-[20px] h-[20px]" />
          </button>
          <button className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
            build your box
          </button>
        </div>

        <nav className="flex items-center gap-3 text-[18px]">
          <Link href={"#"} className="subtitle-animated">
            products
          </Link>
          <button
            onClick={() => setSubMenu((prev) => !prev)}
            className="subtitle-animated flex items-center"
          >
            explore{" "}
            <FaAngleDown
              className={`transition-transform duration-300 ${
                subMenu ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <Link href={"#"} className="subtitle-animated">
            community
          </Link>
          <button className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-black/30 hover:bg-black/70 transition-colors duration-300 p-2">
            <FaUser className="size-[20px]" />
          </button>
        </nav>
      </div>
      {open && <Menu open={open} setOpen={setOpen} />}
      {subMenu && <SubMenu setSubMenu={setSubMenu} />}
    </header>
  );
};

export default Header;
