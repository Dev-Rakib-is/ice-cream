import { statisticsData } from "../../../data/aboutData/statisticsData";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <section className="bg-black/5 py-52">
      <div className="container mx-auto px-1">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[60px] text-center">
          <span className="text-pink">{statisticsData.heading.highlight} </span>
          {statisticsData.heading.after}
        </h2>
        <p className="text-pColor font-normal text-center pb-5 md:pb-8 lg:pb-12">
          {statisticsData.title}
        </p>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-7 ">
          {statisticsData.counter.map((item, index) => {
            return (
              <div
                className="bg-white/80 border-b-2 border-pink p-3 rounded-sm w-full max-w-[255px] h-[182px] content-center text-center"
                key={index}
              >
                <CountUp
                  end={item.value}
                  duration={2}
                  suffix="+"
                  className="text-regularColor text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-normal "
                />

                <p className="text-pColor text-base font-normal pt-7">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
