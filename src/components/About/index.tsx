const About = () => {
  return (
    <div className="flex" id="about">
      <div className="flex w-2/6">
        <div className="flex flex-col justify-center my-20 ml-24">
          <div
            className="flex flex-col my-10"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              <span className="ml-2 font-bold hover:underline hover:cursor-pointer">
                ARQUITETURA
              </span>
            </div>
            <span className="w-48 text-gray-500 mt-2">
              Oferecemos serviços de arquitetura de alta qualidade.
            </span>
          </div>
          <div
            className="flex flex-col my-10"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
              <span className="ml-2 font-bold hover:underline hover:cursor-pointer">
                DESIGN DE INTERIORES
              </span>
            </div>
            <span className="w-48 text-gray-500 mt-2">
              Nossa equipe oferece soluções de arquitetura exclusivas e
              elegantes.
            </span>
          </div>
          <div
            className="flex flex-col my-10"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <span className="ml-2 font-bold hover:underline hover:cursor-pointer">
                PROJETO DE ILUMINAÇÃO
              </span>
            </div>
            <span className="w-48 text-gray-500 mt-2">
              Nossa equipe oferece soluções de arquitetura exclusivas e
              elegantes.
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex-1 bg-scale-75 bg-no-repeat bg-left custom-bg-transition"
        style={{ backgroundImage: "url('/picture.png')" }}
      >
        <div className="flex flex-col items-center mt-20">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1
                className="font-bold text-3xl w-96"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                DESCUBRA O PREÇO DA SUA CASA
              </h1>
              <span
                className="mt-5 font-bold text-brown-base"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                ENTRAREMOS EM CONTATO EM ATÉ 24 HORAS
              </span>
            </div>
            <div className="flex mt-10">
              <form
                className="flex flex-col bg-gray-base p-10 rounded-xl w-full"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <input
                  type="text"
                  placeholder="Nome"
                  className="bg-transparent border-b p-2 focus:outline-none text-white my-4"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-transparent border-b p-2 focus:outline-none text-white my-4"
                />
                <input
                  type="text"
                  placeholder="Telefone"
                  className="bg-transparent border-b p-2 focus:outline-none text-white my-4"
                />
                <button className="w-1/2 py-3 px-4 bg-brown-base text-white text-center hover:bg-transparent hover:border transition ease-in border-brown-base">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
