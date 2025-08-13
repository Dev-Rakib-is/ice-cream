import { useRef, useEffect } from "react";
import bannerBG from "../../../assets/Bannerbg1.png";
import heroImg from "../../../assets/Hero Image.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router";
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
  const containerRef = useRef();
  const navigate = useNavigate()

  useEffect(() => {
    const instance = new SplitType(containerRef.current, { types: "words" });

    gsap.fromTo(
      instance.words,
      {
        scale: 2,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", 
         
        },
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: "circ.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="relative bg-[linear-gradient(135deg,_#EFD7EF_8%,_#F5F9FC_39%,_#F8EAE1_66%,_#EAF8F9_91%)] py-20 overflow-x-hidden">
      <img
        src={bannerBG}
        alt="BannerBG"
        className=" absolute hidden md:block md:top-28 md:left-0 animate-float"
      />
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center mt-7 gap-[5%]">
        {/* Text Side */}
        <div className="text-center lg:text-left w-full md:w-[50%] ">
          <motion.div
            initial={{ x: -150, rotateY: 90 }}
            whileInView={{ x: 0, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-1 items-center justify-center md:justify-center lg:justify-start"
          >
            <span className=" w-[24px] md:w-[36px] lg:w-[64px] h-0.5 border text-[#683292]"></span>
            <p className="text-regularColor text-2xl md:text-[36px] lg:text-[40px]">
              Welcome to The
            </p>
          </motion.div>
          <h1
            ref={containerRef}
            className="text-regularColor text-6xl md:text-[65px] lg:text-[100px] leading-[108px]"
          >
            Classic <span className="text-pink">Ice Cream</span> Parlor
          </h1>
          <motion.p
            initial={{ y: -150, rotateY: 90 }}
            whileInView={{ y: 0, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="text-regularColor font-normal text-base md:text-[20px] lg:text-[22px] overflow-hidden"
          >
            Savor the taste of traditional ice cream made with love and quality
            ingredients.
          </motion.p>
          <motion.button
          onClick={()=>navigate("/flaver")}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0.7, opacity: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            className="flex items-center mx-auto justify-center md:ms-0 text-white gap-1 md:gap-3 lg:gap-4 mt-5 w-[300px] md:w-[305px] rounded-full h-[62px] bg-purple hover:bg-purple-900 cursor-pointer border-none outline-0"
          >
            Browse Our Classic Flavors <ArrowRight />
          </motion.button>
        </div>

        {/* Image Side */}
        <motion.img
          initial={{ scale: 0.7, opacity: 0.8 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={heroImg}
          alt="Banner Image"
          className="mt-[20px] w-[90%] mx-auto md:w-[40%]"
        />
      </div>
    </section>
  );
};

export default Hero;
