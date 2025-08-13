import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { flavorSlider } from "../../../data/homeData/flaver";
import "swiper/css";
import { motion } from "motion/react";
import flaverBackgA from "../../../assets/flaverbgA.png";
import flaverBackgB from "../../../assets/FlaverBgB.png";
import "swiper/css/pagination";
import { useOutletContext } from "react-router";

const Flaver = () => {
  const { cartItem, handleAddToCart } = useOutletContext();
  return (
    <section
      id="vanilla"
      className="bg-[linear-gradient(135deg,_#EFD7EF_8%,_#F5F9FC_43%,_#F8EAE1_64%,_#EAF8F9_100%)] py-20 relative"
    >
      <img
        src={flaverBackgA}
        alt="flaver Favorites"
        className="absolute left-0 top-10 hidden md:block md:w-[140px] lg:w-[203px] md:h-[140px] lg:h-[253px] animate-float"
      />
      <img
        src={flaverBackgB}
        alt="flaver Favorites"
        className="absolute right-0 bottom-10 hidden md:block md:w-[140px] lg:w-[203px] md:h-[140px] lg:h-[253px] animate-float"
      />
      <div className="container mx-auto ">
        <motion.h2
          initial={{ y: 200, rotateX: 180 }}
          whileInView={{ y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal text-regularColor text-center pb-3 overflow-hidden"
        >
          Our<span className="text-pink"> Classic</span> Favorites
        </motion.h2>
        <motion.p
          initial={{ y: 200, rotateX: 180 }}
          whileInView={{ y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-pColor font-normal text-base md:text-lg lg:text-xl text-center pb-7 md:pb-[30px] lg:pb-[50px]"
        >
          Check out our top products that our customers love.
        </motion.p>
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          autoplay={{
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1200,
          }}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="w-full"
        >
          {flavorSlider.map((item) => {
            const Icon = item.iconA;
            const IconA = item.iconB;
            return (
              <SwiperSlide key={item.id}>
                <div className="relative rounded-2xl bg-white mx-auto w-full max-w-[255px] p-3 ">
                  <img src={item.image} alt="Card Image" />
                  <div className="flex mt-[21px] items-center">
                    <h3 className="font-bold text-xl text-regularColor">
                      {item.title}
                    </h3>
                    <p className="block font-semibold text-sm text-regularColor">
                      {item.rating}
                    </p>
                  </div>
                  <p className="text-base font-normal text-pColor">
                    {item.heading}
                  </p>
                  {/* heart Icon  */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="absolute cursor-pointer top-5 left-5 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center "
                  >
                    <Icon className="text-black active:text-pink-200" />
                  </motion.button>
                  {/* cart Icon  */}
                  <div className="flex justify-between items-center">
                    <p className="text-pink font-bold text-xl">{item.price}</p>
                    <motion.button
                      onClick={() => handleAddToCart(item)}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer w-[46px] h-[46px] bg-purple rounded-full flex items-center justify-center"
                    >
                      <IconA className="text-white" />
                    </motion.button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Flaver;
