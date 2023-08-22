import { NextSeo } from "next-seo";
import About from "@/components/About";
import AboutComplement from "@/components/AboutComplement";
import Footer from "@/components/Footer";
import FormContact from "@/components/FormContact";
import Header from "@/components/Header";
import Immobile from "@/components/Immobile";

const HomeTemplate = () => {
  return (
    <>
      <NextSeo title="Denilson Pintel | Corretor de Imóveis" />
      <div className="flex">
        <div className="flex flex-col">
          <div>
            <Header />
          </div>
          <div>
            <About />
          </div>
          <div>
            <AboutComplement />
          </div>
          <div>
            <FormContact />
          </div>
          <div>
            <Immobile />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTemplate;
