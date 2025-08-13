import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-[46px] h-[46px] rounded-full bg-purple cursor-pointer fixed bottom-5 right-5 z-50 sm:flex items-center justify-center hidden animate-float shadow-[0_0_10px_#ffff]"
        >
          <ArrowUp size={24} className="text-white" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
