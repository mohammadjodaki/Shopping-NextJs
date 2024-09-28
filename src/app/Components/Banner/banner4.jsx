import Image from "next/image";
import React from "react";
import Banner from "../../Images/Blog_-_PHCL_-_Beatrice_Domond-_Sitting_On_Luggage_-_Web.png";

function banner4() {
  return (
    <div className="relative">
      <Image className="w-full h-screen" src={Banner} />
      <div className="absolute md:w-1/3 left-20 top-1/4 text-white">
        <h2 className="text-5xl font-bold">
          Pack Heavy, <br /> Chase Light
        </h2>
        <p className="mt-10">
          <b>Latest episode: Beatrice Domond</b>
          <br /> Loved for her unique, slightly vintage style, she sees
          skateboarding as an art form and not just a sport.
        </p>
      </div>
      <a className="absolute left-20 bottom-10 border text-white py-2 px-4 duration-700 font-bold border-white hover:text-black hover:bg-white" href="">Watch now</a>
    </div>
  );
}

export default banner4;
