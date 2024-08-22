import React from "react";
import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience Top-notch quality and stylish with out sought-after
          selections , Discover a World of comfort , design and worth
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((products,)=>(
          <PopularProductsCard key={products.name}{...products}/>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
