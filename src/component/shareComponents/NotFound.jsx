import { Link } from "react-router";
import ops from"../../assets/ops.jpg"


const NotFound = () => {
  return (
    <section>
      <div className="container mx-auto py-[100px] lg:py-[190px]">
        <div className="flex items-center justify-center">
            <img src={ops} alt="ops Image" className="max-w-[150px]"/>
            <h1 className="text-[60px] text-black font-bold text-center">404</h1>
        </div>
        <p className="text-base font-normal text-pColor text-center mt-3 ">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="cursor-pointer mx-auto my-3  w-[150px] h-12 border rounded border-pColor/60 flex justify-center items-center">
          Go back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
