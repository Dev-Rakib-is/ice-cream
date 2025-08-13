import { useState } from "react";
import { instagramCardData } from "../../../data/homeData/InstagramCardData";
import { motion } from "framer-motion";

const FollowInstagram = () => {
  const [hoverId, setHoverId] = useState(null);

  return (
    <section className="bg-[linear-gradient(135deg,_#EFD7EF_8%,_#F5F9FC_43%,_#F8EAE1_64%,_#EAF8F9_100%)] bg-cover bg-no-repeat bg-center py-7 md:py-[80px] lg:py-[150px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal text-regularColor text-center pb-3 md:pb-5 lg:pb-6">
          Follow Us on <span className="text-pink">Instagram</span>
        </h2>
        <p className="text-pColor text-base md:text-lg lg:text-xl font-normal text-center">
          Join our Instagram community for updates, special deals, and more!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[25px] pt-6 md:pt-[50px]">
          {instagramCardData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              onMouseEnter={() => setHoverId(item.id)}
              onMouseLeave={() => setHoverId(null)}
              className={`relative group w-[180px] sm:w-[300px] md:w-[190px] lg:w-[233px] h-[230px] sm:h-[240px] md:h-[240px] lg:h-[288px] rounded-3xl overflow-hidden transition-all duration-300 ease-in-out gap-2 ${
                hoverId && hoverId !== item.id
                  ? "blur-sm brightness-75"
                  : "blur-0"
              }`}
            >
              <img
                src={item.image1}
                alt="Image 1"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={item.image2}
                alt="Image 2"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-4 backdrop:blur-sm"
              />

              <motion.a
                href={item.link}
                target="_blank"
                whileTap={{ scale: 0.95 }}
                className="text-white bg-purple absolute bottom-16 left-1/2 -translate-x-1/2 w-36 h-10 flex items-center justify-center font-semibold text-lg rounded-3xl opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
              >
                {item.title}
              </motion.a>
              <p className="text-black font-normal text-sm absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-10 text-center">
                {item.style}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowInstagram;
