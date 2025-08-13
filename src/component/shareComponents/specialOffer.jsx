import { CommonHero } from "./CommonHero";
import SummerOffer from "../section/home/SummerOffer";

const specialOffer = () => {
  return (
    <section>
      <CommonHero description={"SpecialOffer"} />
      <SummerOffer />
    </section>
  );
};

export default specialOffer;
