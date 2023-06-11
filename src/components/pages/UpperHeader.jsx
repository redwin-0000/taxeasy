import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import  Whatsapp  from "../img/whatsaap-icon.png";
const UpperHeader = () => {
  return (
    <header className="bg-[#020027]  w-[100%] text-white flex justify-around items-center py-4 px-6 gap-[32%]">
      <div className="flex items-center">
        <a href="https://www.facebook.com/people/TaxEasy-Solutions-Private-Limited/100076207151621/" className="mx-3">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="https://twitter.com/Taxeasy_in" className="mx-3">
          <FaTwitter className="text-2xl" />
        </a>
        <a href="ss" className="mx-3">
          <FaYoutube className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/taxeasy_in/" className="mx-3">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=9918312232" className="mx-3">
          <img 
          src={Whatsapp}
          alt="whtasapp"
          />
        </a>
      </div>
        <div className="flex md:flex-row flex-col md:gap-4 md:text-right ">
          <p className="text-sm font-medium">info@thetaxeasy.com</p>
          <p className="text-sm font-medium"> +91 9918312232</p>
        </div>
    </header>
  );
};

export default UpperHeader;