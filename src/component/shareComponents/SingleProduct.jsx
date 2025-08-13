// This Compoment is not Working now 

import { useParams } from "react-router";
import { CommonHero } from "./CommonHero";
import { products } from "../../data/pageData/shop";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-pColor font-normal text-base">Product Not Found</div>
    );
  }
  return (
    <section className="bg-white">
      <CommonHero description={"Shop"} />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md mx-auto mb-6 rounded"
        />
        <p>{product.description}</p>
        <p className="font-semibold mt-4">Price: ${product.price}</p>
      </div>
    </section>
  );
};

export default SingleProduct;
