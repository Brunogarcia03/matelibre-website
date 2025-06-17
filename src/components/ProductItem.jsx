"use client";

import Image from "next/image";
import { FaArrowRight, FaPlus } from "react-icons/fa6";

import lime_fruit from "@/assets/products/lime-fruit.png";
import lime from "@/assets/products/lime.png";

const ProductItem = ({
  title = "Mint & Lime",
  link = "/products/mint-lime",
  fruit = lime_fruit,
  can = lime,
  color = {
    primary: "#235c1b",
    secondary: "#e1efe3",
  },
}) => {
  return (
    <article
      className="group relative rounded-[50px] aspect-[450/400] transition-all duration-500"
      style={{
        backgroundColor: color.secondary,
        padding: "3rem",
        overflow: "hidden",
      }}
    >
      <h2 className="font-bold text-size-h2" style={{ color: color.primary }}>
        {title}
      </h2>
      <div className="flex items-end justify-between">
        <div className="w-full h-full">
          <Image
            src={lime_fruit}
            alt={lime & fruit}
            width={500}
            height={625}
            className="absolute left-0 bottom-0 w-[210px] h-[262px] z-0 transition-all duration-300 opacity-0 translate-y-[15%] -translate-x-[10%] group-hover:translate-0 group-hover:opacity-100"
          />
          <Image
            src={lime}
            alt="Product Name"
            width={200}
            height={507}
            className="w-[92px] h-[233px] transition-all duration-500 translate-y-[50%] group-hover:translate-y-[40%]"
          />
        </div>

        <button className="relative flex h-12 w-12 group-hover:w-full gap-2 items-center justify-center py-2 px-3 overflow-hidden rounded-full text-white bg-[#257535] hover:bg-[#1f5f2b] text-lg transition-all duration-300">
          <span className="hidden group-hover:inline-flex text-nowrap transition-all duration-300">
            Hover me
          </span>
          <FaArrowRight className="flex h-5 w-5" />
        </button>
      </div>
    </article>
  );
};

export default ProductItem;
