type LogoProps = {
  border?: boolean;
  size?: "normal" | "large";
};

const Logo = ({ border = false, size = "normal" }: LogoProps) => {
  return (
    <div
      className={`${border ? "border border-black border-2" : ""} ${
        size === "normal" ? "w-14 max-h-14" : "w-20 max-h-20"
      } rounded-full overflow-hidden`}
    >
      <img src="/logo.png" alt="Logo" />
    </div>
  );
};

export default Logo;
