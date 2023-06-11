import Header from "./InnerHeader";
import Footer from "./footer";
//import digitalOne from "../img/digital-1.png";
import serviceOne from "../img/Service-1.png";
import serviceTwo from "../img/Service-2.png";
import serviceThree from "../img/Service-3.png";
import serviceFour from "../img/Service-4.png";
import Carousel from "../componets_part/Corosal";
import SectionFive from "../componets_part/SectionFive";
const DigitalBilling = () => {
  return (
    <>
      <Header />
      {/* section-1 */}
      <section className="text-gray-600 bg-white body-font py-24 -mt-24 md:-mt-0">
      <div className="container mx-auto w-[66%] flex  md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-serif  md:text-5xl text-xl mb-4 font-bold text-gray-900">
            TaxEasy Provides their<br/> customers<br/> <span className="text-[#35BDD0]">User Friendly Billing<br/> Experience !!!</span>
          </h1>
          <p className="mb-8 leading-relaxed md:text-2xl text:xl">
            Empowering MSME’s with
            <span className="text-[#35bdd0]">
              {" "}
              Digital Billing, Digital Office <br /> and Digital Filing.
            </span>
          </p>
          <div className="flex lg:flex-row md:flex-col">
            <button className="bg-[#35BDD0] inline-flex py-3 px-5 rounded-lg items-center hover:-translate-y-1 hover:scale-110">
              <span className="ml-4 flex items-start flex-row leading-none">
                <span className="md:text-xl text-white mb-1 ">
                  Download TaxEasy App
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-4 md:mt-0 ">
          {/* <img
            className="object-cover object-center rounded h-[22rem]"
            alt="hero"
            src={digitalOne}
          /> */}
          <Carousel />
        </div>
      </div>
    {/* <Line /> */}
    </section>
    <section class="text-gray-600 body-font bg-[#f3fcfc] -mt-20 md:-mt-20">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0 ">
          <img
            className="object-cover object-center rounded h-[6rem] px-32"
            alt="hero"
            src={serviceOne}
          />
           <p class="leading-relaxed mt-4">Free Android Mobile App</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0  ">
          <img
            className="object-cover object-center rounded h-[6rem] px-32 "
            alt="hero"
            src={serviceTwo}
          />
           <p class="leading-relaxed mt-4">100% safe</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0 ">
          <img
            className="object-cover object-center rounded h-[6rem] px-32"
            alt="hero"
            src={serviceThree}
          />
           <p class="leading-relaxed mt-4">Manage Multiple Business</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0 ">
          <img
            className="object-cover object-center rounded h-[6rem] px-32 "
            alt="hero"
            src={serviceFour}
          />
           <p class="leading-relaxed mt-4">Made In India</p>
        </div>
      </div>
    </div>
  </div>
</section>
<SectionFive />
      {/* section-1 end */}
      {/* section-2 start */}
      <Footer />
    </>
  )
}

export default DigitalBilling