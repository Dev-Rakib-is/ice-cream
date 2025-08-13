import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
  const [email, setMail] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      Swal.fire({
        title: "Error!",
        text: "Invalid Email!",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }
    if (!checked) {
      setError("You must agree to the Privacy Policy.");
      return;
    }
    setError("");

    Swal.fire({
      title: "You have subscribed successfully!",
      icon: "success",
      draggable: true,
    });
    setMail("");
    setChecked(false);
  };
  return (
    <section className="bg-loginBG bg-cover bg-no-repeat bg-center my-7 md:my-[65px] lg:my-[136px]">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal text-regularColor text-center px-[22px] sm:px-[30px] md:px-[100px] lg:px-[227px]">
          Sign up For <span className="text-pink">Exclusive Deals</span> and
          Updates
        </h2>
        <p className="text-pColor text-lg font-normal text-center py-4 md:py-[22px] lg:py-[36px]">
          Get 10% off your next order and stay updated with our latest offers.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="flex justify-center pb-4 text-pink">
            Email
          </label>
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
            <input
              type="email"
              value={email}
              id="email"
              placeholder="Enter Your Email Address"
              className="w-[90%] px-5 md:w-[410px] lg:w-[520px] h-[62px] shadow-2xl rounded-full border border-pink-200"
              onChange={(e) => {
                setMail(e.target.value);
                setError("");
              }}
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-pink shadow-[0_0_10px_#F83D8E]  hover:bg-hoverColor cursor-pointer w-[80%] md:w-[180px] lg:w-[200px] h-[34px] md:h-[42px] lg:h-[62px] rounded-full flex items-center justify-center text-white text-base font-normal gap-1"
            >
              Subscribe <ArrowRight className="text-white" />
            </motion.button>
          </div>
          <div className="flex items-center justify-center gap-3 pt-7 md:pt-[30px] lg:pt-[39px] pb-7">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className=" cursor-pointer "
            />
            <p className="font-normal text-sm ">
              I agree to the{" "}
              <span className="text-pink underline underline-offset-4">
                Privacy Policy .
              </span>
            </p>
          </div>
          {error && (
            <p className="text-pink font-semibold text-base text-center">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Login;
