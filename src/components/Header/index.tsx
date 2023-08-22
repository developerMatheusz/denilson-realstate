import Logo from "../Logo";
import ButtonMenu from "../ButtonMenu";
import { useState } from "react";

const Header = () => {
  const images = ["/immobile.jpg", "/immobile_2.jpg", "/immobile_3.jpg"];
  const addresses = ["DUFFY ST", "MAIN ST", "ELM ST"];
  const areas = ["200m2", "150m2", "180m2"];
  const prices = ["R$240.000,00", "R$180.000,00", "R$210.000,00"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex" id="indice">
      <div className="flex flex-col w-2/6 bg-black bg-opacity-80 text-white">
        <div className="flex flex-col w-full bg-black bg-opacity-20 p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo />
              <span className="ml-2 text-lg font-bold">
                Denilson Figueiredo
              </span>
            </div>
            <div className="flex mr-24">
              <ButtonMenu />
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <span className="text-5xl font-bold">
              DESIGN <br />& CONSTRUÇÕES
            </span>
          </div>
          <div className="flex items-center justify-end mt-10">
            <div className="w-44 mr-10">
              <span className="text-base font-bold text-brown-base">
                ENERGIA MODERNA E CASAS EFICIENTES A PARTIR DE 150 M2
              </span>
            </div>
          </div>
          <div className="flex items-center justify-start mt-10 mt-5 ml-2">
            <button className="text-base bg-transparent border border-brown-base py-4 px-6 font-bold hover:bg-brown-base transition ease-in">
              CONTATE-NOS
            </button>
          </div>
        </div>
        <div className="flex w-full h-full items-center justify-end p-5 max-h-32">
          <div className="bg-brown-base py-4 px-10 shadow-xl z-10 mb-32">
            <button
              className="border hover:border-neutral-700 hover:text-neutral-700 transition ease-in rounded-full p-5 mx-1"
              onClick={handlePrevImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              className="border hover:border-neutral-700 hover:text-neutral-700 transition ease-in rounded-full p-5 mx-1"
              onClick={handleNextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-black bg-opacity-80">
        <div className="flex flex-col w-full h-full">
          <div
            className="w-full h-full bg-cover"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
          <div className="flex justify-between items-center p-10 bg-black bg-opacity-20 max-h-32 h-32">
            <div>
              <span className="text-5xl text-4xl text-center font-800 text-neutral-700">
                54+ TRABALHOS
              </span>
            </div>
            <div className="flex flex-row">
              <span className="mx-5 font-bold text-white text-base text-sm">
                {addresses[currentIndex]}
              </span>
              <span className="mx-5 font-bold text-brown-base text-base text-sm">
                {areas[currentIndex]}
              </span>
              <span className="mx-5 font-bold text-brown-base text-base text-sm">
                {prices[currentIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
