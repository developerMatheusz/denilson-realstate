import { useState } from "react";

const AboutComplement = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (stepNumber: number) => {
    setActiveStep(stepNumber);
  };

  return (
    <div className="flex bg-black bg-opacity-80" id="portfolio">
      {activeStep === 1 && (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-20 pl-44 py-20 w-1/2">
          <div className="w-full" data-aos="fade-right" data-aos-delay="200">
            <span className="font-bold text-brown-base">
              4 PASSOS PARA UMA NOVA CASA
            </span>
            <h1 className="mt-6 text-white font-800 text-4xl">
              COMO NÓS FAZEMOS <span className="font-light">ISSO</span>
            </h1>
          </div>
          <div
            className="w-full mt-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="text-2xl text-brown-base font-bold">
              ATINGIR E DEFINIR METAS
            </span>
            <p className="mt-6 text-neutral-500 font-semibold">
              A primeira coisa que fazemos é nos encontrar com nossos clientes e
              conversar sobre seus objetivos em um projeto futuro. Durante esta
              reunião, sinta-se à vontade para comunicar suas ideias e fazer
              muitas perguntas.
            </p>
            <p className="mt-6 text-neutral-500 font-semibold">
              Esta etapa é altamente decisiva, pois você pode avaliar o trabalho
              do seu potencial vendedor navegando em seu portfólio. Como
              cliente, você também pode avaliar se o vendedor ouve suas
              necessidades e confirma que as entende.
            </p>
          </div>
        </div>
      )}
      {activeStep === 2 && (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-20 pl-44 py-20 w-1/2">
          <div className="w-full" data-aos="fade-right" data-aos-delay="200">
            <span className="font-bold text-brown-base">
              4 PASSOS PARA UMA NOVA CASA
            </span>
            <h1 className="mt-6 text-white font-800 text-4xl">
              COMO NÓS FAZEMOS <span className="font-light">ISSO</span>
            </h1>
          </div>
          <div
            className="w-full mt-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="text-2xl text-brown-base font-bold">
              TRABALHANDO NO CONCEITO
            </span>
            <p className="mt-6 text-neutral-500 font-semibold">
              O próximo passo da nossa cooperação consiste em desenvolver o
              conceito da sua futura casa. Isso nos ajuda a definir todos os
              fatores que tornam o processo de construção de sua casa
              bem-sucedido.
            </p>
            <p className="mt-6 text-neutral-500 font-semibold">
              Nossa equipe de designers e arquitetos planeja cada etapa do
              projeto para garantir que o resultado final atenda não apenas às
              suas necessidades, mas também aos padrões internacionais de
              construção e segurança. É quando o monitoramento e o controle
              começam.
            </p>
          </div>
        </div>
      )}
      {activeStep === 3 && (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-20 pl-44 py-20 w-1/2">
          <div className="w-full" data-aos="fade-right" data-aos-delay="200">
            <span className="font-bold text-brown-base">
              4 PASSOS PARA UMA NOVA CASA
            </span>
            <h1 className="mt-6 text-white font-800 text-4xl">
              COMO NÓS FAZEMOS <span className="font-light">ISSO</span>
            </h1>
          </div>
          <div
            className="w-full mt-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="text-2xl text-brown-base font-bold">
              CONSTRUINDO SUA CASA
            </span>
            <p className="mt-6 text-neutral-500 font-semibold">
              Não há dúvida de que a parte mais importante e responsável da
              construção de uma casa é o seu processo de construção. Como
              trabalhamos com empreiteiros confiáveis, um ótimo resultado é
              garantido.
            </p>
            <p className="mt-6 text-neutral-500 font-semibold">
              Esta etapa é uma das mais complexas, pois inclui uma variedade de
              tarefas que devem ser controladas - desde a preparação do canteiro
              de obras até a instalação de isolamento e acabamento do drywall,
              bem como o trabalho no exterior.
            </p>
          </div>
        </div>
      )}
      {activeStep === 4 && (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-20 pl-44 py-20 w-1/2">
          <div className="w-full" data-aos="fade-right" data-aos-delay="200">
            <span className="font-bold text-brown-base">
              4 PASSOS PARA UMA NOVA CASA
            </span>
            <h1 className="mt-6 text-white font-800 text-4xl">
              COMO NÓS FAZEMOS <span className="font-light">ISSO</span>
            </h1>
          </div>
          <div
            className="w-full mt-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="text-2xl text-brown-base font-bold">
              CONCLUINDO UM PROJETO
            </span>
            <p className="mt-6 text-neutral-500 font-semibold">
              Quando o projeto chega à sua fase final, nossa equipe de controle
              de qualidade realiza a verificação final da obra para garantir que
              tudo foi feito da maneira correta.
            </p>
            <p className="mt-6 text-neutral-500 font-semibold">
              Nossos funcionários também garantirão que todos os elementos e
              acessórios internos sejam instalados corretamente durante esta
              etapa final. Depois de tudo pronto, convidamos nosso cliente a
              avaliar o resultado final e vivenciar a qualidade do desempenho do
              nosso projeto.
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-20 pr-44 pl-20 py-20 w-1/2">
        <div className="w-full">
          <div
            className="flex py-4 items-center justify-center"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div className="flex items-center px-5">
              <span className="font-bold px-2 text-brown-base transition ease-in text-sm">
                01
              </span>
              <button
                className={`${
                  activeStep === 1 ? "text-white" : "text-neutral-500"
                } font-bold w-44 text-left text-sm hover:text-white transition ease-in`}
                onClick={() => handleStepChange(1)}
              >
                CONHECIMENTO COM O CLIENTE
              </button>
            </div>
            <div className="flex items-center px-5">
              <span className="font-bold px-2 text-brown-base text-sm">02</span>
              <button
                className={`${
                  activeStep === 2 ? "text-white" : "text-neutral-500"
                } font-bold text-neutral-500 w-44 text-left text-sm hover:text-white transition ease-in`}
                onClick={() => handleStepChange(2)}
              >
                DESENVOLVIMENTO DO CONCEITO DO PROJETO
              </button>
            </div>
          </div>
          <div
            className="flex py-4 items-center justify-center"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div className="flex items-center px-5">
              <span className="font-bold px-2 text-brown-base text-sm">03</span>
              <button
                className={`${
                  activeStep === 3 ? "text-white" : "text-neutral-500"
                } font-bold text-neutral-500 w-44 text-left text-sm hover:text-white transition ease-in`}
                onClick={() => handleStepChange(3)}
              >
                TRABALHANDO NO INTERIOR E NO EXTERIOR
              </button>
            </div>
            <div className="flex items-center px-5">
              <span className="font-bold px-2 text-brown-base text-sm">04</span>
              <button
                className={`${
                  activeStep === 4 ? "text-white" : "text-neutral-500"
                } font-bold text-neutral-500 w-44 text-left text-sm hover:text-white transition ease-in`}
                onClick={() => handleStepChange(4)}
              >
                ACABAMENTOS PARA SUA FUTURA CASA
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center mt-10 w-full h-80"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {activeStep === 1 && (
            <div
              className="w-full h-full bg-cover rounded-2xl"
              style={{ backgroundImage: "url('/step_1.jpg')" }}
            />
          )}
          {activeStep === 2 && (
            <div
              className="w-full h-full bg-cover rounded-2xl"
              style={{ backgroundImage: "url('/step_2.jpg')" }}
            />
          )}
          {activeStep === 3 && (
            <div
              className="w-full h-full bg-cover rounded-2xl"
              style={{ backgroundImage: "url('/step_3.jpg')" }}
            />
          )}
          {activeStep === 4 && (
            <div
              className="w-full h-full bg-cover rounded-2xl"
              style={{ backgroundImage: "url('/step_4.jpg')" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutComplement;
