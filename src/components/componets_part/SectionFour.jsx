import React from 'react'
import homeBanner from "../img/home-banner.png";
import Line from './Line';
const SectionFour = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
  <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Designed for <span  className="text-[#06aead]">Multiple Businesses</span></h1>
    </div>
    <div className='mx-auto flex justify-center w-[90%] mt-12'>
    <img class=" mb-10 object-cover object-center rounded w-[60rem] h-auto " alt="hero" src={homeBanner}/>
    </div>
    
  </div>
  <Line />
</section>
  )
}

export default SectionFour