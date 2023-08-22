import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const ButtonMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="transition ease-in z-20">
      <button onClick={toggleMenu} className="z-10">
        {!isMenuOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </button>
      <div className="fixed top-0 left-0 right-0 flex items-center justify-center">
        <CSSTransition
          in={isMenuOpen}
          timeout={250}
          classNames="fade"
          unmountOnExit
        >
          <div className="flex items-center text-black absolute h-auto top-0 py-10 px-5 bg-gray-100">
            <nav className="flex items-center justify-center">
              <span className="text-sm font-semibold my-2 mx-4 cursor-pointer hover:text-brown-base">
                <Link href="#indice">INÍCIO</Link>
              </span>
              <span className="text-sm font-semibold my-2 mx-4 cursor-pointer hover:text-brown-base transition ease-in">
                <Link href="#about">SOBRE</Link>
              </span>
              <span className="text-sm font-semibold my-2 mx-4 cursor-pointer hover:text-brown-base transition ease-in">
                <Link href="#portfolio">PORTFÓLIO</Link>
              </span>
              <span className="text-sm font-semibold my-2 mx-4 cursor-pointer hover:text-brown-base transition ease-in">
                <Link href="#contact">CONTATOS</Link>
              </span>
              <span className="text-sm font-semibold my-2 mx-4 cursor-pointer hover:text-brown-base transition ease-in">
                <Link href="#project">PROJETOS</Link>
              </span>
              <span className="flex items-center text-xl text-gray-500 font-semibold my-2 mx-4 cursor-pointer">
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <p className="text-black hover:text-brown-base transition ease-in">
                  <Link href="tel:6599329474">+55 65 9932-9474</Link>
                </p>
              </span>
            </nav>
            <button onClick={toggleMenu}>
              {isMenuOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default ButtonMenu;
