"use client"
import Image from "next/image";
import { useCart } from '../Products/CartContext';
import React, { useEffect, useState } from "react";  
import Backgif from "../../Images/backvideo.gif";
import Logo1 from "../../Images/svgexport-3.svg";
import Logo2 from "../../Images/svgexport-4.svg";
import Basket1 from "../../Images/svgexport-8.svg";
import Basket2 from "../../Images/svgexport-9.svg";
import Menuham1 from "../../Images/svgexport-11.svg";
import Menuham2 from "../../Images/svgexport-10.svg";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function header() {

  const { totalItems  } = useCart();

  const [isopen , setIsOpen] = useState(false)
  const toggleMenu = () =>{
    setIsOpen(!isopen)
  }

  const [scroll, setScroll] = useState(false);  

  useEffect(() => {  
    const handleScroll = () => {  
      setScroll(window.scrollY > 50)
    };  
    
    window.addEventListener('scroll', handleScroll);  
    
    return () => {  
      window.removeEventListener('scroll', handleScroll);  
    };  
  }, []); 

  return (
    <div className="w-full h-screen  md:h-[120vh] relative bg-cover">
      <Image className="absolute w-full h-full" src={Backgif} />
      <div className={`fixed z-50 group hover:bg-white duration-700 w-full px-5 flex justify-between ${scroll ? 'bg-white h-24' : 'bg-transparent h-20'}`}>
        <div className="w-1/2 h-full flex gap-5 items-center">
          <Image
            className={`relative group-hover:opacity-0 ${scroll ? 'opacity-0' : 'opacity-100'}`}
            src={Logo2}
          />
          <Image
            className={`absolute  group-hover:opacity-100 ${scroll ? 'opacity-100' : 'opacity-0'}`}
            src={Logo1}
          />
          <ul className={`hidden md:flex items-center  group-hover:text-black gap-5 ${scroll ? 'text-black' : 'text-white'}`}>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 h-full flex gap-5 items-center justify-end">
          <div className="hidden lg:flex w-1/2 h-1/2 bg-gray-100 rounded-3xl gap-5 p-5 items-center">
          <SearchIcon/>
            <input
              className="bg-gray-100 outline-none"
              type="search"
              placeholder="Search for bags ..."
            />
          </div>
          <a
            className={`hidden md:flex p-3 border group-hover:border-black group-hover:text-black ${scroll ? 'border-black text-black' : 'border-white text-white'}`}
            href=""
          >
            Db Black
          </a>
          <div className="flex items-center gap-3 cursor-pointer">
            <PersonOutlineIcon className={`relative text-white  group-hover:opacity-0 ${scroll ? 'opacity-0' : 'opacity-100'}`}/>
            <PersonOutlineIcon className={`absolute group-hover:opacity-100 ${scroll ? 'opacity-100' : 'opacity-0'}`}/>
            <h2 className={`flex group-hover:text-black ${scroll ? 'text-black' : 'text-white'}`}>Account</h2>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image className={`relative group-hover:opacity-0 ${scroll ? 'opacity-0' : 'opacity-100'}`} src={Basket2} />
            <Image className={`absolute group-hover:opacity-100 ${scroll ? 'opacity-100' : 'opacity-0'}`} src={Basket1} />
            <h2 className={`flex group-hover:text-black text-white`}>  
          <span className="bg-red-500 text-white rounded-full px-2">{totalItems}</span> Bag  
        </h2>
            <Image className={`relative group-hover:opacity-0 flex md:hidden ${scroll ? 'opacity-0' : 'opacity-100'}`} src={Menuham1} onClick={toggleMenu} />
            <Image className={`absolute right-5 group-hover:opacity-100 flex md:hidden ${scroll ? 'opacity-100' : 'opacity-0'}`} src={Menuham2} onClick={toggleMenu} />
          </div>
        </div>
      </div>
      <div className={`md:hidden w-72 h-screen p-5 *:my-2 transform transition-transform duration-300 ease-in-out shadow-xl fixed left-0 top-20 z-50 bg-white ${
          isopen ? "-translate-x-0" : "-translate-x-full"
        }`}>
          <CloseIcon className="w-full cursor-pointer mx-auto text-5xl" onClick={toggleMenu}/>
            <ul className="flex flex-col justify-center items-center py-10 gap-20">
              <li className="font-bold text-4xl"><a href="">Shop</a></li>
              <li className="font-bold text-4xl"><a href="">Explore</a></li>
              <li className="font-bold text-4xl"><a href="">Support</a></li>
            </ul>
        </div>
      <div className="w-full absolute top-1/2 px-10">
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          Gear up. <br /> Get ready.
        </h1>
        <p className="text-white mt-7">Award-winning bags and backpacks.</p>
      </div>
      <a
        className="absolute w-24 md:font-bold h-10 bottom-10 flex justify-center items-center ml-10 bg-white"
        href=""
      >
        Explore
      </a>
    </div>
  );
}

export default header;
