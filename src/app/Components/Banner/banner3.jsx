import Image from "next/image";
import React from "react";
import Banner1 from "../../Images/homepage_-_commute_-_category_new_2000x111.webp";
import Banner2 from "../../Images/homepage_-_surf_-_category_2000x2222.webp";
import Banner3 from "../../Images/homepage_-_commute_-_skate_2000x3333.webp";

function banner3() {
  return (
    <div className="w-full flex flex-wrap">
      <div className="relative cursor-pointer w-full md:w-2/6 overflow-hidden">
        <Image
          className="w-full h-full object-cover hover:scale-105 duration-700 transform transition-transform"
          src={Banner1}
        />
        <div className="absolute left-10 bottom-20 flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-white">Commute</h3>
          <a className="hover:bg-white hover:text-black duration-700 flex py-2 justify-center items-center font-bold text-white border border-white" href="">Explore</a>
        </div>
      </div>
      <div className="relative cursor-pointer w-full md:w-2/6 overflow-hidden">
        <Image
          className="w-full h-full object-cover hover:scale-105 duration-700 transform transition-transform"
          src={Banner2}
        />
                <div className="absolute left-10 bottom-20 flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-white">Commute</h3>
          <a className="hover:bg-white hover:text-black duration-700 flex py-2 justify-center items-center font-bold text-white border border-white" href="">Explore</a>
        </div>
      </div>
      <div className="relative cursor-pointer w-full md:w-2/6 overflow-hidden">
        <Image
          className="w-full h-full object-cover hover:scale-105 duration-700 transform transition-transform"
          src={Banner3}
        />
                <div className="absolute left-10 bottom-20 flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-white">Commute</h3>
          <a className="hover:bg-white hover:text-black duration-700 flex py-2 justify-center items-center font-bold text-white border border-white" href="">Explore</a>
        </div>
      </div>
    </div>
  );
}

export default banner3;
