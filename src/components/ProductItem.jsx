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
      className="group relative rounded-[50px] aspect-[680/480] transition-all duration-500"
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
            className="absolute -left-5 -bottom-5 w-[250px] h-[302px] z-0 transition-all duration-500 opacity-0 group-hover:left-0 group-hover:bottom-0 group-hover:opacity-100"
          />
          <Image
            src={lime}
            alt="Product Name"
            width={200}
            height={507}
            className="absolute left-10 -bottom-1/3 -translate-y-1/3 group-hover:-bottom-8 group-hover:translate-y-0 w-[92px] h-[233px] transition-all duration-500"
          />
        </div>

        <div className="absolute bottom-5 right-5">
          <button className="relative flex items-center justify-center gap-2 py-2 px-2 overflow-hidden text-white bg-[#257535] hover:bg-[#1f5f2b] text-base transition-all duration-300 button-circle group-hover:button-circle-expand">
            <span className="text-nowrap font-bold">view product</span>
            <FaArrowRight className="size-[1.5rem]" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
