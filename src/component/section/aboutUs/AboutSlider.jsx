import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { aboutSlider } from "../../../data/aboutData/aboutSlider";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";



const AboutSlider = () => {
  return (
    <section className="bg-[linear-gradient(135deg,_#EFD7EF_8%,_#F5F9FC_43%,_#F8EAE1_64%,_#EAF8F9_87%)] py-32 ">
      <div className="container mx-auto px-1">
        <h2 className="text-center font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-regularColor pb-3">
          {aboutSlider.heading.before}
          <span className="text-pink"> {aboutSlider.heading.higlight} </span>
          {aboutSlider.heading.after}
        </h2>
        <p className="text-xl font-normal text-pColor text-center">
          {aboutSlider.title}
        </p>
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          loop={true}
          autoplay={{ 
            delay: 1200,
            pauseOnMouseEnter:true
           }}
          spaceBetween={30}
          pagination={{ clickable: true, dynamicBullets: true }}
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
          }}
        >
          {aboutSlider.member.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full max-w-[350px] mt:-5 md:mt-8 lg:mt-12 flex flex-col justify-center items-center m-auto">
                <img
                  src={item.image}
                  alt=" Slider Image"
                  className="w-[314px] h-[auto]"
                />
                <h5 className="pt-8 text-regularColor font-bold text-xl">
                  {item.title}
                </h5>
                <p className="text-pColor font-normal">{item.title}</p>
                <div className="flex gap-3 pt-5">
                
                  <Link to="https://www.facebook.com" className="w-[45px] h-[45px] rounded-full bg-pink text-white flex justify-center items-center" target="_blank">
                    <Facebook />
                  </Link>
                  <Link to="https://www.instagram.com" className="w-[45px] h-[45px] rounded-full bg-pink text-white flex justify-center items-center" target="_blank">
                    <Instagram />
                  </Link>
                  <Link to="https://www.youtube.com/" className="w-[45px] h-[45px] rounded-full bg-pink text-white flex justify-center items-center" target="_blank">
                    <Youtube />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutSlider;
