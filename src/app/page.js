"use client"
import React from "react";
import { CartProvider } from './Components/Products/CartContext'
import Header from './Components/Header/header'
import Products1 from './Components/Products/products1'
import Banner from './Components/Banner/banner'
import Products2 from './Components/Products/products2'
import Banner2 from './Components/Banner/banner2'
import Banner3 from './Components/Banner/banner3'
import Slider from './Components/Slider/slider'
import Banner4 from './Components/Banner/banner4'
import Footer from './Components/Footer/footer'
import Image from "next/image";
import Profile from './Images/profile.JPG'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";

export default function Home() {

  const [profile , setProfile] = useState(false)
  const toggleProfile = () =>{
    setProfile(!profile)
  }

  return (
    <div>
      <div className="w-40 h-40 rounded-full fixed z-50 right-2 bottom-2 shadow-2xl shadow-blue-900">
        <Image className='w-full h-full rounded-full object-cover cursor-pointer z-50 absolute' onClick={toggleProfile} src={Profile}/>
        <a target="_blank" href="https://www.linkedin.com/in/mohammad-jodakian"><LinkedInIcon className={`hover:bg-amber-500 text-3xl absolute top-20 left-16 text-white bg-blue-800 transform transition-transform duration-500 ease-linear ${profile ? '-translate-x-28 -translate-y-20' : 'translate-x-full translate-y-full'}`}/></a>
        <a target="_blank" href="https://instagram.com/mohammad_jodaki_web"><InstagramIcon className={`hover:bg-amber-500 text-3xl absolute top-20 left-16 text-white bg-blue-800 transform transition-transform duration-500 ease-linear ${profile ? '-translate-x-28 -translate-y-10' : 'translate-x-full translate-y-full'}`}/></a>
        <a target="_blank" href="https://github.com/mohammadjodaki"><GitHubIcon className={`hover:bg-amber-500 text-3xl absolute top-20 left-16 text-white bg-blue-800 transform transition-transform duration-500 ease-linear ${profile ? '-translate-x-28 -translate-y-0' : 'translate-x-full translate-y-full'}`}/></a>
        <a target="_blank" href="jodakianm@gmail.com"><EmailIcon className={`hover:bg-amber-500 text-3xl absolute top-20 left-16 text-white bg-blue-800 transform transition-transform duration-500 ease-linear ${profile ? '-translate-x-28 translate-y-10' : 'translate-x-full translate-y-full'}`}/></a>
      </div>
      <CartProvider>
      <Header />
      <Products1 />
      <Banner />
      <Products2 />
      <Banner2 />
      <Banner3 />
      <Slider />
      <Banner4/>
      <Footer/>
      </CartProvider>
    </div>
      );
}
