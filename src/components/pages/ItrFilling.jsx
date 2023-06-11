import Header from "./InnerHeader";
import Footer from "./footer";
import Ccarousel from "../componets_part/Corosal";
import google from "../img/google-play.png";
import homeOne from "../img/screen-1.png";
import ItrFaq from "../componets_part/ItrFaq";
import gstTen from "../img/gst-10.png";
import gstfourteen from "../img/gst-14.png"
import gstSeventeen from "../img/gst-17.png"
import gstEighteen from "../img/gst-18.png"
import gstNineteen from "../img/gst-19.png"
const ItrFilling = () => {
  return (
    <>
      <Header />
      {/* section-1 */}
      <section className="text-gray-600 bg-white body-font">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center mx-[20%] mt-10">
          <h1 className="font-serif  md:text-5xl text-3xl mb-4 font-bold text-gray-900">
            {" "}
            Ab Business hua easy with
            <span className="text-[#35BDD0]">TaxEasy !!!</span>
          </h1>
          <p className="mb-8 leading-relaxed text-base font-bold">
            Digital Billing! Digital Office! Digital Filing!
          </p>
        </div>
      </section>
      {/* section-1 end */}
      <section>
        <div className="container mx-auto  flex px-5  md:flex-row flex-col items-center gap-10 mt-10">
          <div className="lg:flex-grow md:w-1/2 lg:pl-2 md:pl-16  flex flex-col md:items-start md:text-left  items-center text-center  md:-mt-28">
            <p className="font-bold text-3xl">
              Get your ITR done within same <br /> day with Taxeasy Experts:
            </p>
            <div className="mt-6">
              <ul className="space-y-2">
                <li>Simply</li>
                <li>Securely</li>
                <li>Accurately</li>
              </ul>
            </div>
            <p className="mt-6 text-bold">
              Just upload/share your documents and leave rest with us !
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* <img
            className="object-cover object-center rounded h-[22rem]"
            alt="hero"
            src={screenOne}
          /> */}
            <Ccarousel />
          </div>
        </div>
      </section>
      {/* section-2 start */}
      <section className="text-white bg-[#020040] body-font">
        <div className="lg:flex-grow  md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center mx-[20%]">
          {/* <Animation /> */}
          <p className="mt-6 leading-relaxed text-base font-bold md:text-4xl">
            Download<span className="text-[#35BDD0]"> TaxEasy</span> Mobile App
          </p>
          <p className="mt-6 leading-relaxed text-base font-bold md:text-4xl">
            Now For <span className="text-[#35BDD0]">ITR Filing!!!</span>
          </p>
        </div>
        <div class="container mx-auto  flex px-5 py-10 md:flex-row flex-col items-center -mt-20 md:px-56">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover  object-center rounded h-[32rem] md:mt-8 mt-20 "
              alt="hero"
              src={homeOne}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div class="flex flex-col mt-24">
              <p class="mb-8 leading-relaxed">Get it From</p>
              <div class="flex lg:flex-row md:flex-col gap-24 -mt-5">
                <img src={google} alt="google" class="h-10 " />
                <div className="flex lg:flex-row md:flex-col">
                  <button className="bg-[#35BDD0] inline-flex py-1 px-3 rounded-lg items-center hover:-translate-y-1 hover:scale-110">
                    <span className="ml-4 flex items-start flex-row leading-none">
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
        {/* <Line/> */}
      </section>
      {/* ////////////////////////// */}
      <section className="text-black bg-[#ffffff] body-font">
        <div className="container mx-auto  flex px-5  flex-col items-center gap-10 mt-10">
          <p className="font-bold md:text-5xl text-xl">WHY TRUST FOR <span className="text-[#35BDD0]">TAXEASY</span> FOR <span className="text-[#35BDD0]">ITR?</span></p>
          <div className="flex md:flex-row flex-col md:gap-20 gap-5">
            <div className="space-y-6">
              <div className="flex flex-row items-center gap-2">
                <img src={gstTen} alt="gstTen" className="h-11" />
                <p>Live Chat with Taxeasy Experts</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={gstEighteen} alt="gstTen" className="h-11" />
                <p>Free Tax Planning</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={gstNineteen} alt="gstTen" className="h-11" />
                <p>Free Filing of For 10E in case of Areas of Salary</p>
              </div>
            </div>
            <div  className="space-y-6">
              <div className="flex flex-row items-center gap-2">
                <img src={gstfourteen} alt="gstTen" className="h-11" />
                <p>Free Guidance from CA’s at every step</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={gstSeventeen} alt="gstTen" className="h-11" />
                <p>Continuous Follow-up until Refund received</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ////////////////////////// */}
      <section className="text-white h-[20vh] bg-[#020040] body-font">
        <div className="container mx-auto flex md:py-20 py-11 flex-col items-center md:gap-10 mt-10 ">
          <div className="flex md:flex-row flex-col md:gap-x-96">
            <p className="font-bold md:text-4xl text-xm text-white">START E- FILING OF ITR NOW !!!</p>
            <button className="bg-[#35BDD0] inline-flex md:py-1  md:px-3 px-14 py-2 rounded-lg items-center hover:translate-x-1 hover:scale-110 mt-3 md:mt-0">
              {/* <span className="flex items-start flex-row leading-none"> */}
                <span className="text-md text-white mb-1 ">
                  Conatct now !!!
                </span>
              {/* </span> */}
            </button>
          </div>
        </div>
      </section>
      {/* faq */}
      <ItrFaq />

      <Footer />
    </>
  );
};

export default ItrFilling;
