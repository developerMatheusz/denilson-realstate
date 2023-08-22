import Carousel from "../Carousel";

const Immobile = () => {
  return (
    <div className="flex items-center justify-center bg-gray-200" id="project">
      <div className="flex flex-col">
        <div className="flex items-center pt-20 border-b-4 border-brown-base ml-20">
          <div>
            <div
              className="flex items-center text-6xl font-light mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <p className="font-800">PRO</p>JETOS
              <span className="ml-10 text-neutral-500 text-base font-light text-sm">
                Abaixo, você pode dar uma olhada em nossos projetos recentes e
                em destaque que foram premiados por nossa abordagem
                arquitetônica exclusiva.
              </span>
            </div>
          </div>
        </div>
        <div className="p-10 py-20 w-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Immobile;
