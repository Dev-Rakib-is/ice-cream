import { reviewHeading } from "../../../data/pageData/review";
import { reviewTestimonials } from "../../../data/pageData/review";
import { CommonHero } from "../../shareComponents/CommonHero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const Review = () => {
  return (
    <>
      <CommonHero title="Review" description="Review" />
      <section className="bg-white py-14">
        <div className="container mx-auto">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-regularColor font-normal text-center pb-4 px-0 md:px-8 lg:px-[285px]">
            {reviewHeading.before}
            <span className="text-pink"> {reviewHeading.highlight}</span>{" "}
            {reviewHeading.after}
          </h2>
          <p className=" text-lg md:text-xl font-normal text-pColor text-center pb-5 md:pb-7 lg:pb-[50px]">
            {reviewHeading.title}
          </p>
          <Swiper
            modules={[A11y, Autoplay, Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 1200, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviewTestimonials.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="flex items-center justify-center">
                    <div className="bg-black/5 p-8 rounded-[20px] w-full max-w-[350px] min-h-[354px] border-b-2 border-pink items-stretch">
                      <p className="text-pColor font-normal text-base pb-7">
                        {item.description}
                      </p>
                      <div className="flex gap-2 items-center">
                        <img src={item.image} alt="reviewer Image" />
                        <div>
                          <p>{"⭐".repeat(item.star)}</p>
                          <h5 className="text-pink font-semibold text-lg pt-2">
                            {item.name}
                          </h5>
                          <p className="text-pColor font-normal text-base mx-auto">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Review;
