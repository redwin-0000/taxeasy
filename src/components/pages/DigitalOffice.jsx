import Header from "./InnerHeader";
import Footer from "./footer";
import Ccarousel from "../componets_part/Corosal";
import homeOne from "../img/screen-1.png";
import google from "../img/google-play.png";
import gstTen from "../img/gst-10.png";
import gstfourteen from "../img/gst-14.png"
import gstSeventeen from "../img/gst-17.png"
import gstEighteen from "../img/gst-18.png"
import gstNineteen from "../img/gst-19.png"
import DGFaq from "../componets_part/digitalOfiice_faq";
const DigitalOffice = () => {
  return (
    <>
      <Header />
      {/* section-1 */}
      <section className="text-gray-600 bg-white body-font">
        <div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center mx-[20%] mt-10">
            {/* <Animation /> */}
            <p className="mt-6 leading-relaxed text-base font-bold md:text-5xl">
              Ab har Business banega digital with
              <br />
              <span className="text-[#35BDD0] md:text-5xl text-base md:px-36">
                “Digital Office”!!!
              </span>
            </p>
          </div>
          <div>
            <div className="container mx-auto w-[65%] flex px-5  md:flex-row flex-col items-center gap-10 mt-10">
              <div className="lg:flex-grow md:w-1/2 lg:pl-2 md:pl-16  flex flex-col md:items-start md:text-left  items-center text-center  md:-mt-28">
                <p>
                  <span className="text-[#000000] font-bold">
                    India’s 1st Digital Office{" "}
                  </span>
                  An Initiative towards Business Digitalization Taxeasy brings
                  India’s 1st Digital Office Space for SMB’s. With the digital
                  office, now businessmen need not to worry about how to keep
                  their Tax invoices, GST Return Calculations and other business
                  documents safe for years. In digital office, all the business
                  documents can be arranged month wise and will be stored on
                  cloud based server for years. Businessmen can access their
                  documents on the go anytime & anywhere.
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
          </div>
        </div>
        {/* <Line /> */}
      </section>
      {/* section-1 end */}
      {/* section-2 start */}
      <section className="text-gray-600 bg-[#020027] body-font">
        <div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center mx-[20%] mt-10">
            {/* <Animation /> */}
            <p className="mt-6 leading-relaxed text-base font-bold md:text-5xl text-white">
              NOW, OFFICE IS IN YOUR{" "}
              <span className="text-[#35BDD0]">POCKET !!!</span>
            </p>
          </div>
          <div>
            <div className="container mx-auto w-[65%] flex px-5  md:flex-row flex-col items-center gap-10 mt-10">
              <div className="lg:flex-grow md:w-1/2 lg:pl-2 md:pl-16  flex flex-col md:items-start md:text-left  items-center text-center ">
                <p>
                  Set up your office in your Mobile with the advanced digital
                  office
                  <br /> Feature provided by Taxeasy. In this digital era,
                  Business digitalization
                  <br /> is must for long term success of any business.
                </p>
                <p>
                  With Taxeasy, set up your digital office & make your business
                  digital.
                  <br /> Taxeasy brings India’s 1st digital office to keep all
                  your business records
                  <br /> safe for years. So, it’s your time to keep your office
                  in your pocket with <br /> your own digital office.
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
          </div>
        </div>
        {/* <Line /> */}
      </section>

      <section className="text-black bg-[#ffffff] body-font">
        <div className="container mx-auto  flex px-5  flex-col items-center gap-10 mt-10">
          <p className="font-bold text-5xl">GO PAPERLESS WITH<span className="text-[#35BDD0]">DIGITAL OFFICE !!!</span></p>
          <div className="flex flex-row gap-20 md:mt-10">
            <div className="space-y-6">
              <div className="flex flex-row items-center gap-2">
                <img src={gstTen} alt="gstTen" className="h-11" />
                <p>Arrange your documents month-wise in an organized way.</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={gstEighteen} alt="gstTen" className="h-11" />
                <p>Reduces errors in filing GST Returns with month wise data saved in your digital office</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={gstNineteen} alt="gstTen" className="h-11" />
                <p>Make documents & records easily accessible on the go anytime & anywhere.</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={gstNineteen} alt="gstTen" className="h-11" />
                <p>Save physical storage space.</p>
              </div>
            </div>
            <div  className="space-y-6">
              <div className="flex flex-row items-center gap-2">
                <img src={gstfourteen} alt="gstTen" className="h-11" />
                <p>Save on printing and equipment Costs</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={gstSeventeen} alt="gstTen" className="h-11" />
                <p>Protect your business and related documents from disasters</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={gstSeventeen} alt="gstTen" className="h-11" />
                <p>Become an environment friendly business by going paperless</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={gstSeventeen} alt="gstTen" className="h-11" />
                <p>Secured Documents</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-4 */}
      <section class="text-white bg-[#020027] body-font md:mt-20">
        <div className="lg:flex-grow  md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center mx-[20%]">
          {/* <Animation /> */}
          <p className="mt-6 leading-relaxed text-base font-bold md:text-4xl">
            Download <span className="text-[#35BDD0]">TaxEasy </span>Mobile App
            Now To Make Your
            <br />
            <span className="text-[#35BDD0] md:text-4xl text-base md:mx-60 ">
              Business Digital !!!!!!
            </span>
          </p>
        </div>
        <div class="container mx-auto  flex px-5 py-10 md:flex-row flex-col items-center -mt-20 md:px-52">
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
      <DGFaq />
      <Footer />
    </>
  );
};

export default DigitalOffice;
