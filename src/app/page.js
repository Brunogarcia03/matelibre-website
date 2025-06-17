import Hero from "@/components/Hero";
import ProductItem from "@/components/ProductItem";

const page = () => {
  return (
    <>
      <Hero />
      <div className="w-full my-[1.25rem] mb-[5rem] px-[1.25rem]">
        <div className="grid grid-cols-3 gap-[1.25rem]">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </>
  );
};

export default page;
