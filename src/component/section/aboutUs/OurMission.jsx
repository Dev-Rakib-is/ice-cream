import { ArrowRight } from "lucide-react";
import { aboutMision } from "../../../data/aboutData/aboutMission";
import { motion } from "motion/react";
import { useState } from "react";

const OurMission = () => {
  const [openModal, setOpemModal] = useState(false);
  return (
    <section className="bg-aboutmissionBG bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-y-8 md:gap-x-[42px] lg:gap-x-[70px] px-4 py-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-white pb-2.5 sm:pb-[16px] md:pb-5 lg:pb-9 leading-tight">
            {aboutMision.Columns[0].heading}
          </h2>
          <p className="text-white leading-relaxed">
            {aboutMision.Columns[0].para}
          </p>
          {/* Read More Button & Modal */}
          <motion.button
            onClick={() => setOpemModal(true)}
            whileTap={{ scale: 0.95 }}
            className="text-white font-semibold text-base w-[192px] h-[62px] rounded-full bg-pink shadow-[0_0_13px_#fff] cursor-pointer mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-2 mx-auto md:mx-0"
          >
            Read More <ArrowRight />
          </motion.button>
          {openModal && (
            <div className="backdrop-blur-lg bg-black/15  mt-5 p-4 rounded-2xl border border-white/20  shadow-[inset_0_0_15px_#F83D8E]">
              <p className="text-white">{aboutMision.Columns[0].paraGraph}</p>
              <button
                onClick={() => setOpemModal(false)}
                className="text-base font-semibold cursor-pointer bg-pink w-20 h-8 rounded-full text-white p-2 flex items-center justify-center  mt-4"
              >
                close
              </button>
            </div>
          )}
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutMision.Columns[1].image}
            alt="About Mission"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
