import Header from "./InnerHeader";
import Footer from "./footer";

const GST = () => {
  return (
    <>
      <Header />
      {/* section-1 */}
      <section className="text-gray-600 bg-white body-font">
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center mx-[20%] mt-10">
          <h1 className="font-serif  md:text-5xl text-3xl mb-4 font-bold text-gray-900"> Ab Business hua easy with
          <span className="text-[#35BDD0]">TaxEasy !!!</span> 
          </h1>
          <p className="mb-8 leading-relaxed text-base font-bold">Digital Billing! Digital Office! Digital Filing!</p>
        </div>
      </section>
      {/* section-1 end */}
      {/* section-2 start */}
      <Footer />
    </>
  )
}

export default GST