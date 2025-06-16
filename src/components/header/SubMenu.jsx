"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import Link from "next/link";

const SubMenu = ({ subMenu }) => {
  useGSAP(() => {
    gsap.to("#submenu-absolute", {
      opacity: subMenu ? 1 : 0,
      duration: 1,
      ease: "power2.out",
    });
  }, [subMenu]);

  return (
    <div
      id="submenu-absolute"
      className="absolute flex flex-col items-center justify-center top-[4vh] left-1/2 -translate-x-1/2 bg-white shadow p-[2vh] rounded-[20%] opacity-0 z-[100] text-black text-xl text-nowrap"
    >
      <Link href="#" id="menu-sublink" className="hover:text-black/30">
        yerba mate
      </Link>
      <Link href="#" id="menu-sublink" className="hover:text-black/30">
        our story
      </Link>
      <Link href="#" id="menu-sublink" className="hover:text-black/30">
        faq
      </Link>
    </div>
  );
};

export default SubMenu;
