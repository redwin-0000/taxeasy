import Header from "./InnerHeader";
import Footer from "./footer";
import SectionOne from "../componets_part/SectionOne";
import SectionTwo from "../componets_part/SectionTwo";
import SectionThree from "../componets_part/SectionThree";
import SectionFour from "../componets_part/SectionFour";
import SectionFive from "../componets_part/SectionFive";
import SectionSix from "../componets_part/SectionSix";

function Home() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}

export default Home;
