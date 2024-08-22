import React from "react";
import { footerLogo } from "../assets/images";
import { facebook } from "../assets/icons";
import { twitter } from "../assets/icons";
import { instagram } from "../assets/icons";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <section>
      <img src={footerLogo} alt="logo"
      height={150}
      width={150}
       />
      <p className="font-palanquin text-lg mt-6 leading-7 ">
        Get shoes ready for the new term at your nearest Nike store. Find Your
        perfect Size In Store. Get Rewards
      </p>
      <div className="flex flex-row gap-3 mt-7 hover:cursor-pointer ">
        <img src={facebook} alt="" className="bg-white p-1 rounded-full  hover:bg-coral-red hover:text-white"/>
        <img src={twitter} alt="" className="bg-white p-1 rounded-full hover:bg-coral-red hover:text-white"/>
        <img src={instagram} alt="" className="bg-white p-1 rounded-full hover:bg-coral-red hover:text-white"/>
      </div>
      <div className='flex flex-1 justify-between mt-8 lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white hover:text-coral-red hover:cursor-pointer'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-coral-red mt-5 flex gap-2 flex-col">
        <p>@Copyright. All rights re-served.</p>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p></div>
    </section>
  );
};

export default Footer;
