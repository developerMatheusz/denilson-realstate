import { useState } from "react";

const Carousel = () => {
  const images = ["/immobile.jpg", "/immobile_2.jpg", "/immobile_3.jpg"];
  const date = ["15 DE MARÇO, 2023", "29 DE ABRIL, 2023", "5 DE MAIO, 2023"];
  const addresses = ["DUFFY ST", "MAIN ST", "ELM ST"];
  const description = [
    "Trabalhamos neste projeto por três meses para ampliar e redesenhar completamente a antiga casa de 2 andares.",
    "A nossa equipa de designers de exteriores e arquitetos integrou as mais recentes inovações neste projeto residencial.",
    "Como um dos nossos primeiros projetos em 2019, esta casa apresenta soluções únicas de paisagismo e trabalho no exterior."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 300);
  };

  const handlePrevImage = () => {
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }, 300);
  };

  return (
    <div className="relative flex items-center justify-start">
      <div className="flex items-left flex-col bg-gray-base py-16 px-5 z-10 rounded-2xl">
        <div>
          <span className="font-normal text-white">{date[currentIndex]}</span>
          <span className="px-4 text-neutral-600">|</span>
          <span className="font-normal text-white">IMOBILIÁRIA</span>
        </div>
        <div className="mt-3 w-80">
          <div className="font-bold text-3xl text-brown-base">
            {addresses[currentIndex]}
          </div>
          <div className="mt-3 text-sm text-neutral-500 font-normal">
            {description[currentIndex]}
          </div>
        </div>
      </div>
      <div className="flex -ml-24 w-full h-screen rounded-2xl overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Imagem do imóvel"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-20">
        <button
          className="my-2 border border-2 border-neutral-500 text-black hover:text-brown-base transition ease-in rounded-full p-2"
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
        <button
          className="my-2 border border-2 border-neutral-500 text-black hover:text-brown-base transition ease-in rounded-full p-2"
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
      </div>
    </div>
  );
};

export default Carousel;
