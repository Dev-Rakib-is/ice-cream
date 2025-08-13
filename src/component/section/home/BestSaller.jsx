import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { saller } from "../../../data/homeData/bestSaller";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "motion/react";
import { useOutletContext } from "react-router";

const BestSaller = () => {
  const { cartItem, handleAddToCart } = useOutletContext();
  return (
    <section id="bestSale" className="bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ y: 200, opacity: 0.8, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-center mt-7 md:mt-[36px] lg:mt-[90px]  font-normal text-regularColor text-3xl sm:text-4xl md:text-5xl lg:text-[60px] pb-3"
        >
          Our <span className="text-pink">Best</span> Sellers
        </motion.h2>
        <motion.p
          initial={{ y: 200, opacity: 0.8, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-pColor font-normal text-base md:text-lg lg:text-xl text-center pb-5 md:pb-[30px] lg:pb-[50px]"
        >
          Discover the favorites that keep our customers coming back for more.
        </motion.p>
        <Swiper
          modules={[Pagination, Autoplay]}
          className="relative"
          pagination={{ Clickable: true, dynamicBullets: true }}
          loop={true}
          slidesPerView={4}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 1200,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {saller.map((item) => {
            const Heart = item.icon1;
            const Cart = item.icon2;
            return (
              <SwiperSlide key={item.id}>
                <div className="relative p-[20px] bg-white rounded-[20px] max-w-[255px] mx-auto">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="w-[46px] h-[46px] rounded-full bg-white cursor-pointer flex items-center justify-center absolute top-7 left-7"
                  >
                    <Heart />
                  </motion.button>
                  <img
                    src={item.image}
                    alt="Item Image"
                    className="flex justify-center items-center mx-auto"
                  />
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-[20px] text-regularColor">
                      {item.title}
                    </h4>
                    <p className="font-semibold text-sm text-start">
                      {item.rating}
                    </p>
                  </div>
                  <p className="text-pColor font-normal text-base">
                    {item.heading}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-pink font-bold text-[22px]">
                      {item.price}
                    </p>
                    <motion.button
                    onClick={()=>handleAddToCart(item)}
                      whileTap={{ scale: 0.95 }}
                      className="bg-purple w-[46px] h-[46px] rounded-full text-white cursor-pointer items-center justify-center flex"
                    >
                      <Cart />
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

export default BestSaller;
