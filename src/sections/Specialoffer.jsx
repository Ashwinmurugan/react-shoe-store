import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const Specialoffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex-1 flex-col">
        <h2 className="font-palanquin capitalize font-bold text-4xl">
          Special Offers for <br />
          <span className="bg-gradient-to-r from-[#9393fd] via-[#5696c6] to-[#f5966a] bg-clip-text text-transparent">
            Nike Shoes
          </span>{" "}
        </h2>
        <p className="font-montserrat text-slate-gray mt-5">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="font-montserrat text-slate-gray mt-4">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={"Shop now"} iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default Specialoffer;
