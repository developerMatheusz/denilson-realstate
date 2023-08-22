import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-base">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Logo border={false} size="large" />
        </div>
        <div className="flex flex-col text-center">
          <span className="mt-10 text-white text-3xl">+55 65 9932 - 9474</span>
          <span className="mt-1 text-white text-3xl">dfpintel@gmail.com</span>
        </div>
        <div className="flex items-center justify-center border-t-2 border-neutral-700 mt-8 w-1/2">
          <Link
            href="https://api.whatsapp.com/send?phone=556599329474"
            target="_blank"
            className="mt-8"
          >
            <img src="/whatsapp.svg" alt="Logo do Whatsapp" className="w-10" />
          </Link>
        </div>
        <div className="mt-10 text-neutral-500">
          <span className="text-center text-sm font-semibold">
            &copy; 2023 Denilson Figueiredo Pintel. Todos os direitos
            reservados.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
