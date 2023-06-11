import LOGO from "../img/Logo.png";
function Header() {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-2xl">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="logo">
            <span className="ml-3 text-xl h-[3rem] w-[10rem]">
              <img src={LOGO} alt="logo" />
            </span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900" href="Home">Home</a>
            <a class="mr-5 hover:text-gray-900" href="DigitalBilling">Digital Billing</a>
            <a class="mr-5 hover:text-gray-900" href="DigitalOffice">Digital Office</a>
            <a class="mr-5 hover:text-gray-900" href="GST">GST</a>
            <a class="mr-5 hover:text-gray-900" href="ItrFilling">ITR Filling</a>
            <a class="mr-5 hover:text-gray-900" href="Blog">Blog</a>
            <a class="mr-5 hover:text-gray-900" href="PartnerWithus">Partner with us</a>
          </nav>
          <button class="inline-flex items-center bg-[#35bdd0] border-0 py-1 px-3 focus:outline-none  rounded-md text-base mt-4 md:mt-0">
            Request Free Demo
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
