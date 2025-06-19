"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productList } from "@/utils/constants";
import ProductItem from "./ProductItem";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const products = [
  productList[1],
  productList[3],
  productList[1],
  productList[3],
];

const Slider = () => {
  useGSAP(() => {
    gsap.to(".slider-rail", {
      x: "-100%",
      repeat: -1,
      ease: "none",
      duration: 25,
    });

    gsap.fromTo(
      "#slider-products",
      { x: "100%" },
      {
        x: "-70%",
        scrollTrigger: {
          trigger: "#slider-section",
          scrub: 5,
          start: "top top",
          end: "bottom top",
        },
      }
    );
  }, []);

  return (
    <>
      <section className="h-[120vh] w-full">
        <div className="relative w-full h-full">
          <h4 className="sticky top-8 text-size-h4 font-bold w-full ml-[3.75rem]">
            Discover our most popular <br /> yerba mate infusions
          </h4>
          <div className="h-[170vh]" />
          <div className="sticky bottom-0 pb-[1.25rem] pt-[3.25rem]">
            <div className="whitespace-nowrap text-size-menu">
              <ul className="slider-rail inline-flex gap-10">
                <li className="rail_text">Energy infusions</li>
                <li className="rail_item">60 mg of caffeine</li>
                <li className="rail_text">Awakens the mind</li>
                <li className="rail_item">No crash</li>
              </ul>
              <ul className="slider-rail inline-flex gap-10">
                <li className="rail_text">Energy infusions</li>
                <li className="rail_item">60 mg of caffeine</li>
                <li className="rail_text">Awakens the mind</li>
                <li className="rail_item">No crash</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="slider-section"
        className="absolute right-0 top-0 h-[300vh] w-full -z-10"
      >
        <div className="sticky top-0 right-0 flex items-center h-[100vh] px-[2.25rem] py-[3rem]">
          <div id="slider-products" className="inline-flex gap-x-[2rem]">
            {products.map((product, i) => (
              <ProductItem
                key={i}
                can={product.drink}
                fruit={product.fruit}
                title={product.title}
                color={{
                  primary: product.colorPrimary,
                  secondary: product.colorSecondary,
                }}
                className="w-[500px] h-[400px]"
              />
            ))}
            <div
              className="group relative rounded-[50px] transition-all duration-500 w-[400px] h-[300px] bg-black text-white"
              style={{ padding: "3rem", overflow: "hidden" }}
            >
              <h2 className="font-bold text-size-h2">See all products</h2>
              <div className="flex items-end justify-between">
                <div className="w-full h-full" />
                <div className="absolute bottom-5 right-5">
                  <button className="relative flex items-center justify-center gap-2 py-2 px-2 overflow-hidden text-black bg-white hover:bg-white/50 text-base transition-all duration-300 button-circle group-hover:button-circle-expand">
                    <span className="text-nowrap font-bold">view product</span>
                    <FaArrowRight className="size-[1.5rem]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
