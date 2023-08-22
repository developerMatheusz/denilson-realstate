import AOS from "aos";
import "aos/dist/aos.css";

const AosWrapper = () => {
  if (typeof window !== "undefined") {
    AOS.init();
  }
  return null;
};

export default AosWrapper;
