import menuImage from "../../../assets/MenuImage.png";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <section id="menu">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col md:flex-row lg:gap-x-[83px] items-center">
          {/* Image side */}
          <motion.img
            initial={{ y: 200, opacity: 0.8, scale: 0.5 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            src={menuImage}
            alt="Menu Image"
            className="w-[90%] md:w-[50%] "
          />
          {/* Text side  */}
          <motion.div
            initial={{ y: 200, opacity: 0.8, scale: 0.5 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="md:w-[50%]"
          >
            <h2 className="text-3xl my-4 sm:text-4xl md:text-5xl lg:text-[60px] text-center font-normal leading-tight">
              Relive the Sweet <br /> Memories of Classic{" "}
              <span className="text-pink">Ice Creams</span>
            </h2>
            <p className="text-pColor text-center md:mt-8">
              From rich chocolate fudge to creamy vanilla sundaes, discover our
              menu of classic ice cream creations.
            </p>
            <motion.button
              onClick={() => navigate("/shop")}
              area-label="Explore Our Menu"
              whileTap={{ scale: 0.95 }}
              className="bg-pink text-white w-[90%] md:w-[238px] h-[62px] rounded-full shadow-[0_0_10px_#F83D8E] cursor-pointer outline-0 border-0 mt-4 md:mt-[36px] mx-auto flex items-center gap-x-3 justify-center font-normal text-base mb-7"
            >
              <span>Explore Our Menu</span> <ArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
