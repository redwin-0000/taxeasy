import React from 'react'
import screenOne from "../img/screen-1.png";
// import Animation from './Animation';
import Line from './Line';
const SectionOne = () => {
  return (
    <section className="text-gray-600 bg-white body-font">
    <div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center md:mx-[20%] mt-10">
        {/* <Animation /> */}
          <p className='text-5xl'>Ab Business hua easy with<span  className="text-[#35BDD0]">TaxEasy !!!</span> </p>
        <p className="mt-6 leading-relaxed text-base font-bold">Digital Billing! Digital Office! Digital Filing!</p>
      </div>
      <div>
      <div className="container mx-auto  flex px-5  md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-serif  md:text-4xl text-xl mb-4 font-bold text-gray-900">
            <span className="text-[#35BDD0]">GST Billing App</span> & India’s
            First <br />
            Digital Office
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            Empowering MSME’s with
            <span className="text-[#35bdd0]">
              {" "}
              Digital Billing, Digital Office  and Digital Filing.
            </span>
          </p>
          <div className="flex lg:flex-row md:flex-col">
            <button className="bg-[#35BDD0] inline-flex py-3 px-5 rounded-lg items-center hover:-translate-y-1 hover:scale-110">
              <span className="ml-4 flex items-start flex-row leading-none">
                <span className="text-sm md:text-xl text-white mb-1 ">
                  Download TaxEasy App
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0 mt-10 md:mt-0">
          <img
            className="object-cover object-center rounded h-[22rem]"
            alt="hero"
            src={screenOne}
          />
        </div>
      </div>
      </div>
    </div>
    <Line />
    </section>
  )
}

export default SectionOne