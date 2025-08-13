import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-[linear-gradient(135deg,_#EFD7EF_8%,_#F5F9FC_39%,_#F8EAE1_66%,_#EAF8F9_91%)] py-20">
      <div className="container mx-auto">
        <h1 className="text-regularColor font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[80px] text-center mt-[60px] sm:mt-[77px] md:mt-[110px] lg:mt-[172px] pb-[14px] sm:pb-4 md:pb-[21px] lg:pb-9">
          About Us
        </h1>
        <div className="bg-white text-pink w-[231px] h-[52px] rounded-[35px] flex justify-center items-center mx-auto text-lg">
          <Link to="/" className="hover:text-pink cursor-pointer text-black">
            Home
          </Link>{" "}
          / About Us
        </div>
      </div>
    </section>
  );
};

export default Hero;
