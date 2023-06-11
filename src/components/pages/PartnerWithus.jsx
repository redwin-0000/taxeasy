import Header from "./InnerHeader";
import Footer from "./footer";
import contact from "../img/contact-1.png"
const PartnerWithus = () => {
  return (
    <>
      <Header />
      {/* section-1 */}
      <section className="">
       <div className="flex flex-row container mx-auto w-[60%] flex px-5 py-10 md:flex-row flex-col items-center gap-44">
       <div>
          <p>Contact us</p>
          <div>
            <p>Get in touch with us and let us<br/>know how<span>we can help!</span></p>
          </div>
          <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-[20rem] h-[20rem] bg-red-100 sm:py-10 py-10 sm:px-10 px-3 relative">
            <div class="text-center relative z-10 w-full text-start">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">info@thetaxeasy.com</h2>
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">info@thetaxeasy.com</h2>
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">info@thetaxeasy.com</h2>
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">info@thetaxeasy.com</h2>
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">info@thetaxeasy.com</h2>
            </div>
          </div>
          </div>
        </div>
        </div>
        <div className="mt-10">
          <img 
          src={contact}
          alt="dd"
          className="h-[30rem]"
          />
        </div>
       </div>
      </section>
      {/* section-1 end */}
      {/* section-2 start */}
      <Footer />
    </>
  );
};

export default PartnerWithus;
