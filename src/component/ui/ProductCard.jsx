import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, viewMode, handleAddToCart }) => {
  return (
    <>
      <div
        className={`relative rounded-2xl bg-white p-3 w-full max-w-[255px] mx-auto transition-shadow hover:shadow-2xl ${
          viewMode === "list" ? "lg:max-w-full flex gap-4 items-start" : ""
        }`}
      >
        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className={`${
            viewMode === "list"
              ? "w-[180px] h-[180px] object-cover rounded-xl"
              : "w-full h-[244px] object-cover rounded-[10px]"
          }`}
        />
        <div className={`${viewMode === "list" ? "flex-1" : ""}`}>
          {/* Name & Rating */}
          <div className="flex justify-between mt-[21px]">
            <h3 className="font-bold text-xl text-regularColor line-clamp-1">
              {product.name}
            </h3>
            <p className="font-semibold text-sm text-regularColor flex items-center gap-1">
              <span> {"⭐"}</span> {product.rating}
            </p>
          </div>
          {/* Title */}
          <p className="text-base font-normal text-pColor my-2 line-clamp-2">
            {product.title}
          </p>
          {/* Price & Button */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-pink font-bold text-xl">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="cursor-pointer w-[46px] h-[46px] bg-purple rounded-full flex items-center justify-center"
            >
              <ShoppingCart className="text-white" />
            </button>
          </div>
        </div>
        {/* Favorite Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="absolute cursor-pointer top-5 left-5 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md"
        >
          <Heart className="text-black hover:text-pink" />
        </motion.button>
        {/* New Badge */}
        {product.badge === "New" && (
          <p className=" absolute top-5 right-5 text-base font-normal h-[45px] w-[45px] bg-pink text-white rounded-full flex justify-center items-center">
            {product.badge}
          </p>
        )}
      </div>
    </>
  );
};

export default ProductCard;
