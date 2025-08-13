import { useNavigate } from "react-router";
import { categories } from "../../../data/homeData/categories";
import { motion } from "motion/react";


const CategorySection = () => {

  const navigate = useNavigate()
  return (
    <section id="category">
      <div className="container mx-auto my-20">
        <motion.h2
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-center"
        >
          Explore Our<span className="text-pink"> Categories</span>
        </motion.h2>
        <motion.p
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-pColor px-1 text-sm sm:text-base md:text-lg lg:text-[20px] font-normal text-center my-2 md:my-3 lg:my-4"
        >
          Browse through our different categories to find your favorite ice
          cream treats.
        </motion.p>
        <motion.div className="flex flex-col justify-center items-center md:flex-wrap md:flex-row gap-[20px] sm:gap-[20px] md:gap-[22px] lg:gap-[25px] mt-11">
          {categories.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                initial={{ y: 200 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, delay: index * 0.3, ease: "easeIn" }}
                key={item.id}
                className="relative w-[90%] md:w-[290px] lg:w-[300px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-2xl"
                />
                <motion.button
                onClick={()=>navigate("/shopo")}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-[50px] bg-white hover:bg-gray-300 rounded-xl flex items-center  gap-2 px-2 font-semibold cursor-pointer text-black justify-between outline-0 border-0"
                >
                  {item.title}{" "}
                  <span className="bg-pink text-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </span>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
