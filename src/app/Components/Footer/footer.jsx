import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Logo from "../../Images/svgexport-3.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function footer() {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full text-white pb-20 px-20 md:w-1/2 h-full bg-black">
        <h2 className="text-6xl font-bold mt-20">
          Db Black. <br />
          The membership <br /> you've been waiting for.
        </h2>
        <div className="mt-20">
          <a href="">
            Sign Up <ArrowForwardIcon />
          </a>
          <p className="mt-7">
            By signing up you are agreeing to the terms and conditions. Read our{" "}
            <a className="underline" href="">
              {" "}
              Privacy Policy.
            </a>
          </p>
        </div>
        <div className="flex gap-32 mt-10">
          <span>Free shipping</span>
          <span>Limited lifetime warranty</span>
        </div>
        <div className="flex gap-10 mt-5">
          <span>Exclusive access to events</span>
          <span>Special offers</span>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full px-20 py-20 bg-white">
        <Image src={Logo} />
        <p className="mt-16 text-2xl font-bold">Support</p>
        <div className="w-full flex">
          <ul className="w-1/2 mt-10 *:mt-3">
            <li className="hover:underline duration-500">
              <a href="">Help Centre</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="">FAQs</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="">Track your Order</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="">Contact Us</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="">Careers</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="">Returns</a>
            </li>
          </ul>
          <ul className="w-1/2 mt-10 *:mt-3">
            <li className="hover:underline duration-500">
              <a href="">Warranty</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="">Find a Retailer</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="">Refer a Friend</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="">Db Student Discount</a>
            </li>
            <li className="hover:underline duration-500">
              <a href="">Products</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-5 mt-16 *:cursor-pointer">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon/>
          <LinkedInIcon/>
        </div>
      </div>
    </div>
  );
}

export default footer;
