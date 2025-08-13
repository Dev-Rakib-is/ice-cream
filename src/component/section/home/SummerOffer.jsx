import summerbgB from "../../../assets/SummerBG2.png";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import summerImage from "../../../assets/Summer special-image.png";
import { useNavigate } from "react-router";

const SummerOffer = () => {
  const navigate = useNavigate();
  return (
    <section
      id="summer"
      className="bg-summerBg py-28 bg-cover bg-center bg-no-repeat relative"
    >
      <img
        src={summerbgB}
        alt="Summer section's Background Image"
        className="absolute hidden md:block right-0 md:bottom-0 md:w-[150px] lg:w-[222px] animate-float"
      />
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Side  */}
          <motion.div
            initial={{ y: 200, opacity: 0.8, scale: 0.5 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            className="w-[50%]"
          >
            <h2 className="text-white  font-normal text-6xl md:text-[65px] lg:text-[112px]">
              Summer Special!
            </h2>
            <p className="text-white text-center md:text-start font-normal text-base md:text-2xl lg:text-[30px] pt-7 pb-9">
              Buy One Sundae, Get One 50% Off!
            </p>
            <div className="w-full flex flex-col md:flex-row gap-3.5 items-center text-white font-normal text-base">
              <motion.button
                onClick={() => navigate("/shop")}
                whileTap={{ scale: 0.95 }}
                className=" w-7/8 md:w-[180px] lg:w-[211px] h-[42px] md:h-[52px] lg:h-[62px] rounded-full bg-pink text-white text-base font-semibold border-0 outline-0 flex  items-center justify-center gap-2 cursor-pointer shadow-[0_0_10px_#F83D8E]"
              >
                Get This Deal <ArrowRight />
              </motion.button>
              <p className="text-center my-7">
                Use code: SUMMER50 at checkout.
              </p>
            </div>
          </motion.div>
          {/* Image Side  */}
          <motion.img
            initial={{ y: 200, opacity: 0.8, scale: 0.5 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            src={summerImage}
            alt=" Summer Offer Image"
            className=" md:object-fill w-[363px] h-[338px] md:w-[413px] md:h-[388px] lg:w-[563px] lg:h-[538px] "
          />
        </div>
      </div>
    </section>
  );
};

export default SummerOffer;
