import React from 'react'
import Whatsapp from "../img/whatsaap-icon.png"
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import {AiOutlineGooglePlus} from "react-icons/ai"
const footer = () => {
  return (
   <>
   <footer class="text-white body-font bg-[#020027]">
  <div class="container  px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class=" -mt-16 md:-mt-0 flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white underline underline-offset-8 text-2xl mb-3">CONTACT US</h2>
        <nav class="list-none mb-10 space-y-4">
          <li>
            <a class="text-white" href='jj'>info@thetaxeasy.com</a>
          </li>
          <li>
            <a  href="https://api.whatsapp.com/send?phone=9918312232" class="text-white">Phone:<sapn>+91 9918312234</sapn></a>
          </li>
          <li>
          <button class="bg-blue-300 inline-flex py-3 w-[70%] rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <a href="https://api.whatsapp.com/send?phone=9918312232" class="ml-4 flex  leading-none gap-4 flex-start ">
            <img 
            src={Whatsapp}
            alt='imge'
            />
          <span class="text-md text-gray-600 mt-1">WhatsApp us</span>
          </a>
          </button>
          </li>
          <li>
            <a class="text-white" href='jj'>Follow us</a>
          </li>
          <li>
          <div className="flex items-center mx-14 md:mx-0">
        <a href="https://www.facebook.com/people/TaxEasy-Solutions-Private-Limited/100076207151621/" className="mx-2">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="https://twitter.com/Taxeasy_in" className="mx-2">
          <FaTwitter className="text-2xl" />
        </a>
        <a href="ss" className="mx-2">
          <FaYoutube className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/taxeasy_in/" className="mx-2">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://www.google.com/search?q=taxeasy+solutions+private+limited&rlz=1C1GCEB_enIN1011IN1011&oq=taxeasy+solutions+private+limited&aqs=chrome..69i57j46i39i175i199j69i61l2.5031j0j7&sourceid=chrome&ie=UTF-8" className="mx-2">
          <AiOutlineGooglePlus className='text-2xl'/>
        </a>
      </div>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white  underline underline-offset-8 text-2xl mb-3">Let Us Help You</h2>
        <nav class="list-none mb-10 space-y-4">
        <li>
            <a class="text-white" href='jj'>Free DEmo</a>
          </li>
          <li>
            <a class="text-white" href='jj'>Customer Care</a>
          </li>
          <li>
            <a class="text-white" href='jj'>Video Tutorials</a>
          </li>
          <li>
            <a class="text-white" href='jj'>User Revievs</a>
          </li>
          <li>
            <a class="text-white" href='jj'>About us</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white underline underline-offset-8 text-2xl mb-3">Tools</h2>
        <nav class="list-none mb-10  space-y-4">
        <li>
            <a class="text-white" href='http://www.taxeasybillingapp.com/pdf/Scheme%20of%20Classification%20of%20Services%20-%20amended.pdf'>SAC Code</a>
          </li>
          <li>
            <a class="text-white" href='http://www.taxeasybillingapp.com/pdf/HSN-Codes-for-GST-Enrolment.pdf'>HSN Code</a>
          </li>
          <li>
            <a class="text-white" href='http://www.taxeasybillingapp.com/pdf/NIC-2004-detail-19jan2009.pdf'>NIC Code</a>
          </li>
          <li>
            <a class="text-white" href='jj'>Calculator</a>
          </li>
          <li>
            <a class="text-white" href='https://play.google.com/store/apps/details?id=com.billing.taxeasy'>Our App</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white underline underline-offset-8 text-2xl mb-3">Trending Blogs</h2>
        <nav class="list-none mb-10  space-y-4">
        <li>
            <a class="text-white" href='jj'>How To Set Up Online Business From Home?</a>
          </li>
          <li>
            <a class="text-white" href='jj'>How To Generate GST Bills For Your Business For Free?</a>
          </li>
          <li>
            <a class="text-white" href='jj'>Who Are Required To File Income Tax Return?</a>
          </li>
          <li>
            <a class="text-white" href='jj'>How To Set Up Digital Office?</a>
          </li>
          <li>
            <a class="text-white" href='jj'>What Are The Monthly Compliances For GST Registered Person?</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
</footer>
   </>
  )
}

export default footer