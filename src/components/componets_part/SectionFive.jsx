import React from 'react'
import homeOne from "../img/home.png";
import google from "../img/google-play.png"
import Line from './Line';
import home from "../img/home-1.png"
import homeTwo from "../img/home-2.png"
import homeThree from "../img/home-3.png"
const SectionFive = () => {
  return (
    <section class="text-white bg-[#020027] body-font">
    <div class="container mx-auto  flex px-5 py-10 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0">
        <img class="object-cover object-center rounded h-[32rem] mt-8" alt="hero" src={homeOne}/>
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">Make GST Billing & Inventory<br/> Management Easy with <span className="text-[#06aead]">Taxeasy!</span></h1>
        <p class="mb-8 leading-relaxed">Download TaxEasy App Now !</p>
      {/* card here */}
    <div className='flex flex-col gap-4 justify-center place-content-center mt-10'>
     <div className='flex  flex-wrap  flex-row gap-5'>
      <div className='flex  flex-wrap gap-2'>
        <img 
        src={home}
        alt='img'
        className='w-10'
        />
        <p>Make GST Bills in just few steps.</p>
      </div>
      <div className='flex flex-wrap gap-2'>
      <img 
        src={homeTwo}
        alt='img'
        className='w-10'
        />
        <p>File GST & ITR with taxeasy experts.</p>
      </div>
     </div>
     <div className='flex flex-wrap flex-col gap-5'>
      <div className='flex flex-wrap gap-2'>
      <img 
        src={homeThree}
        alt='img'
        className='w-10'
        />
        <p>Manage your Inventory<br/> with advanced reports.</p>
      </div>
      <div className='flex flex-wrap  gap-2'>
      <img 
        src={homeThree}
        alt='img'
        className='w-10'
        />
        <p>Manage Multiple <br/> Businesses in single App</p>
      </div>
     </div>
    </div>
      {/* card end */}
        <div class="flex flex-col mt-24">
        <p class="mb-8 leading-relaxed">Get it From</p>
          <div class="flex md:flex-row flex-col md:gap-24 -mt-5">
          <img 
          src={google}
          alt='google'
          class="h-10 "
          />
          <div className="flex lg:flex-row md:flex-col mt-10 md:mt-0">
            <button className="bg-[#35BDD0] inline-flex py-4 px-2 rounded-lg items-center hover:-translate-y-1 hover:scale-110">
              <span className=" flex items-start flex-row leading-none">
                <span className="text-md text-white mb-1 ">
                  Download TaxEasy App
                </span>
              </span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <Line/>
  </section>
  )
}

export default SectionFive