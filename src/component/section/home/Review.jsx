import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bubble1 from "../../../assets/Bubble1.png";
import bubble2 from "../../../assets/Bubble2.png";
import bubble3 from "../../../assets/Bubble3.png";
import bubble4 from "../../../assets/Bubble4.png";
import bubble5 from "../../../assets/Bubble5.png";
import bubble6 from "../../../assets/Bubble6.png";
import bubble7 from "../../../assets/Bubble7.png";
import bubble8 from "../../../assets/Bubble8.png";
import { Autoplay, Pagination } from "swiper/modules";
import { reviewData } from "../../../data/homeData/reviewData";

const Review = () => {
  return (
    <section
      id="review"
      className="bg-[linear-gradient(135deg,_#EFD7EF_8%,_#F5F9FC_40%,_#F8EAE1_66%,_#EAF8F9_100%)]"
    >
      <div className="container mx-auto relative overflow-hidden">
        <img
          src={bubble1}
          alt="Bubble Iamge 1"
          className="absolute left-2 bottom-0 bubbleEffct hidden md:block blur-xs"
          style={{ animationDelay: "2s" }}
        />
        <img
          src={bubble2}
          alt="Bubble Iamge 2"
          className="absolute right-0 bottom-10 bubbleEffct blur-xs"
          style={{ animationDelay: "3s" }}
        />
        <img
          src={bubble3}
          alt="Bubble Iamge 3"
          className="absolute  left-20 bottom-0 bubbleEffct hidden md:block blur-xs"
          style={{ animationDelay: "4s" }}
        />
        <img
          src={bubble4}
          alt="Bubble Iamge 4"
          className="absolute left-10 bottom-3  bubbleEffct blur-xs"
          style={{ animationDelay: "5s" }}
        />
        <img
          src={bubble5}
          alt="Bubble Iamge 5"
          className="absolute right-20 bottom-20  bubbleEffct hidden blur-xs md:block "
          style={{ animationDelay: "6s" }}
        />
        <img
          src={bubble6}
          alt="Bubble Iamge 6"
          className="absolute right-36 bottom-0  bubbleEffct hidden md:block blur-xs "
          style={{ animationDelay: "7s" }}
        />
        <img
          src={bubble7}
          alt="Bubble Iamge 7"
          className="absolute left-36 bottom-0  bubbleEffct blur-xs "
          style={{ animationDelay: "8s" }}
        />
        <img
          src={bubble8}
          alt="Bubble Iamge 8"
          className="absolute right-40 bottom-5 bubbleEffct blur-xs "
          style={{ animationDelay: "9s" }}
        />
        <h2 className="text-3xl px-[40px] xs:text-4xl md:text-5xl  md:pb-[80px] md:px-[140px]  md:mt-[60px] lg:text-[60px] font-normal text-center mt-6 lg:mt-[146px] pb-10 lg:pb-[90px] lg:px-[310px]">
          Hear from Our <span className="text-pink">Happy Ice Cream</span>{" "}
          Lovers
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          className="w-full"
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
          }}
        >
          {reviewData.map((item) => (
            <SwiperSlide key={item.id} className="px-2">
              <p className="text-regularColor font-medium text-base md:text-lg lg:text-[20px] text-center text-balance">
                {item.heading}
              </p>
              <p className="text-base md:text-lg pt-7 md:pt-[36px] lg:pt-[32px] text-pink font-bold text-center pb-1">
                {item.name}
              </p>
              <p className="text-pColor text-xs font-normal text-center pb-2">
                {item.mode}
              </p>
              <p className="text-center pb-16">{item.star}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
