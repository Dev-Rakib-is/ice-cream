import { Link } from "react-router-dom";

export const CommonHero = ({title, description}) => {
  return (
    <section className="bg-[linear-gradient(135deg,_#EFD7EF_8%,_#F5F9FC_40%,_#F8EAE1_66%,_#EAF8F9)] py-36">
      <div className="container m-auto">
        <h1 className="text-regularColor font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[80px] text-center pb-5 sm:pb-6 md:pb-7 lg:pb-9">
          {title}
        </h1>
        <div className="bg-white w-[231px] h-[52px] rounded-[35px] flex justify-center items-center mx-auto gap-1 text-lg">
          <Link to="/" className="text-black hover:text-pink">
            Home
          </Link>
          /<p className="text-pink">{description}</p>
        </div>
      </div>
    </section>
  );
};
