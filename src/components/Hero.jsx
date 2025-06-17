"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import hero1 from "@/assets/hero/hero-1.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import hero3 from "@/assets/hero/hero-3.jpg";
import hero6 from "@/assets/hero/hero-6.jpg";
import hero7 from "@/assets/hero/hero-7.jpg";

import Image from "next/image";
import Link from "next/link";

import { FaAngleDown, FaBars, FaUser } from "react-icons/fa";
import { useState } from "react";

import Menu from "@/components/header/Menu";
import SubMenu from "@/components/header/SubMenu";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  useGSAP(() => {
    let tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 4,
      defaults: {
        duration: 2,
      },
    });

    tl.fromTo("#hero-1", { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1 })
      .fromTo(
        "#hero-2",
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1 },
        ">4"
      )
      .fromTo(
        "#hero-3",
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1 },
        ">4"
      )
      .fromTo(
        "#hero-6",
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1 },
        ">4"
      )
      .fromTo(
        "#hero-7",
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1 },
        ">4"
      );

    gsap.from("#header-hero", {
      y: "-100%",
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });

    gsap.to(".main-container", {
      borderBottomLeftRadius: "10%",
      borderBottomRightRadius: "10%",
      translateY: "-140px",
      scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <main
      className={`main-container h-dvh w-full overflow-hidden ${
        open && "no-scrollbar"
      }`}
    >
      <div className="relative h-dvh w-full">
        <div className="absolute inset-0 w-full h-full bg-black/20 z-[10]" />
        <Image
          className="absolute inset-0 h-full w-full object-cover object-[43.8672%_51.6963%] select-none"
          id="hero-1"
          priority
          src={hero1}
          alt="Imagen hero 1"
          width={1285}
          height={1028}
        />
        <Image
          className="absolute inset-0 h-full w-full object-cover object-[57.7899%_48.2393%] select-none"
          id="hero-2"
          src={hero2}
          alt="Imagen hero 2"
          width={1469}
          height={1028}
        />
        <Image
          className="absolute inset-0 h-full w-full object-cover object-[53.5664%_33.2734%] select-none"
          id="hero-3"
          src={hero3}
          alt="Imagen hero 3"
          width={771}
          height={1028}
        />
        <Image
          className="absolute inset-0 h-full w-full object-cover object-[53.5664%_33.2734%] select-none"
          id="hero-6"
          src={hero6}
          alt="Imagen hero 6"
          width={771}
          height={1028}
        />
        <Image
          className="absolute inset-0 h-full w-full object-cover object-[53.5664%_33.2734%] select-none"
          id="hero-7"
          src={hero7}
          alt="Imagen hero 7"
          width={771}
          height={1028}
        />

        <div className="absolute left-[8vh] bottom-[5vh] z-20">
          <h1 className="text-size-menu font-bold mb-[3vh] text-white leading-[1]">
            The ideal <br />
            dose <br />
            of energy
          </h1>
          <div className="font-bold">
            <Button className={"bg-white text-black"}>Build your box</Button>
          </div>
        </div>
      </div>
      <div className="h-full w-full inset-0 z-30">
        <header id="header-hero" className="absolute top-0 left-0 w-full z-30">
          <div className="flex items-center justify-between mx-[5vh] my-[1vh] text-white font-bold">
            <div className="flex items-center gap-3">
              <Link
                href={"/"}
                className="font-bold text-white text-4xl h-[3.75rem] w-[7.5rem] tracking-wider"
              >
                mate <span className="block ml-5 -mt-3">libre</span>
              </Link>

              <button
                onClick={() => setOpen(true)}
                className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-white/30 hover:bg-white/70 transition-colors duration-300 p-2 mr-[2vh]"
              >
                <FaBars className="w-[20px] h-[20px]" />
              </button>
              <button className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 text-xl">
                build your box
              </button>
            </div>

            <nav className="flex items-center gap-3 text-xl">
              <Link
                href={"#"}
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                products
              </Link>
              <button
                onClick={() => setSubMenu((prev) => !prev)}
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 flex items-center"
              >
                explore{" "}
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    subMenu ? "rotate-180" : "rotate-0"
                  }`}
                />
                <SubMenu subMenu={subMenu} />
              </button>
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
        </header>
      </div>
      {open && <Menu open={open} setOpen={setOpen} />}
    </main>
  );
};

export default Hero;
