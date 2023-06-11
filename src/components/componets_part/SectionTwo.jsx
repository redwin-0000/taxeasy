import React from 'react'
import homefifteen from "../img/home-15.png"
import Line from "../componets_part/Line"
const SectionTwo = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5  mx-auto ">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-5xl text-2xl font-bold title-font md:mb-4 mt-10 md:mt-0 text-gray-900">
          Features of  <span className="text-[#06aead]"> TaxEasy App</span>
          </h1>
        </div>
        <div className='flex lg:flex-row flex-col items-center justify-center -mt-16 lg:-mt-0'>   
          <div className='flex flex-col p-12 space-y-4'>
            <div className=' w-[80vw]  md:w-[20vw] md:h-[24vh]  rounded-2xl shadow-2xl'>
            <div className='flex flex-row px-4 py-4'>
              <p>image </p>
              <p>Free GST Billing App</p>
            </div>
            <p className='p-4'>With Taxeasy Billing App, you can easily & quickly create GST Bills/Tax Invoices in just few steps. Also, you can choose different Invoices format for different lines of Business.</p>
            </div>
            <div className=' w-[80vw]  md:w-[20vw] md:h-[24vh]  rounded-2xl shadow-2xl'>
            <div className='flex flex-row px-4 py-4'>
              <p>image </p>
              <p>Free GST Billing App</p>
            </div>
            <p className='p-4'>With Taxeasy Billing App, you can easily & quickly create GST Bills/Tax Invoices in just few steps. Also, you can choose different Invoices format for different lines of Business.</p>
            </div>
          </div>
          <div  className='w-[80vw]   lg:w-[17vw] lg:h-[70vh]  rounded-2xl shadow-2xl'>
            <img
              className="object-cover object-center rounded h-[70vh] px-6 "
              alt="hero"
              src={homefifteen}
            />
          </div>
          <div className='flex flex-col p-12 space-y-4'>
          <div className=' w-[80vw]  md:w-[20vw] md:h-[24vh]  rounded-2xl shadow-2xl'>
            <div className='flex flex-row px-4 py-4'>
              <p>image </p>
              <p>Free GST Billing App</p>
            </div>
            <p className='p-4'>With Taxeasy Billing App, you can easily & quickly create GST Bills/Tax Invoices in just few steps. Also, you can choose different Invoices format for different lines of Business.</p>
            </div>
            <div className=' w-[80vw]  md:w-[20vw] md:h-[24vh]  rounded-2xl shadow-2xl'>
            <div className='flex flex-row px-4 py-4'>
              <p>image </p>
              <p>Free GST Billing App</p>
            </div>
            <p className='p-4'>With Taxeasy Billing App, you can easily & quickly create GST Bills/Tax Invoices in just few steps. Also, you can choose different Invoices format for different lines of Business.</p>
            </div>
          </div>
        </div>
      </div>
      <Line />
      </section>
  )
}

export default SectionTwo