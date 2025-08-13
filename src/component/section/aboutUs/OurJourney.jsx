import { useState } from "react";
import { ourHistory } from "../../../data/aboutData/OurHistory";
import { motion, AnimatePresence } from "motion/react";

const OurJourney = () => {
  const [showmodal, setShowModal] = useState(false);
  return (
    <section className="bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-center items-center py-[44px] sm:py-[66px] md:py-[88px] lg:py-[147px] lg:gap-[100px] md:gap-[60px] sm:gap-[45px] gap-[30px] px-4">
        <img
          src={ourHistory.Columns[0].image}
          alt="Our History Image"
          className="px-1 h-auto w-full max-w-[590px] mx-auto"
        />
        <div>
          <h2 className=" mb-[12px] sm:mb-[16px] md:mb-[24px] lg:mb-[41px] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal text-regularColor text-center">
            {ourHistory.Columns[1].heading.before}
            <span className="text-pink ">
              {ourHistory.Columns[1].heading.highlight}
            </span>
            {ourHistory.Columns[1].heading.after}
          </h2>
          <p className="text-pColor text-base ">{ourHistory.Columns[1].para}</p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className=" top-2 right-4 text-base font-semibold text-black/70 hover:text-black/90 bg-pink shadow-[0_0_10px_#F83D8E] w-[122px] h-[42px] rounded-full cursor-pointer mt-4"
          >
            Read More
          </motion.button>
        </div>
        {/* Modal  */}
        <AnimatePresence>
          {showmodal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center z-50"
            >
              <div className="bg-white max-w-2xl w-[90%] p-6 rounded-xl relative max-h-[90vh] overflow-y-auto">
                {ourHistory.Columns[1].paraGraph.map((para, index) => (
                  <p key={index} className="text-pColor text-base font-normal">
                    {para}
                  </p>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="bg-pink rounded-full text-base font-semibold w-[120px] h-[42px] mt-4 cursor-pointer shadow-[0_0_10px_#F83D8E] text-black/90"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurJourney;
