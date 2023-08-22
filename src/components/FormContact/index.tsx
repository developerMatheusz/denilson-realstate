const FormContact = () => {
  return (
    <div
      className="flex items-center justify-center bg-scale-75 bg-no-repeat bg-center custom-bg-immobile-transition"
      style={{ backgroundImage: "url('/picture.png')" }}
      id="contact"
    >
      <div className="flex mx-16" data-aos="fade-right" data-aos-delay="200">
        <img src="/background_immobile.png" alt="Background de imóveis" />
      </div>
      <div className="flex mx-16">
        <div className="flex flex-col items-center mt-20">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1
                className="font-bold text-3xl w-96"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                ENTRE EM CONTATO COM NOSSO TIME
              </h1>
              <span
                className="mt-5 font-bold text-brown-base"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                VAMOS TRABALHAR JUNTOS!
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

export default FormContact;
