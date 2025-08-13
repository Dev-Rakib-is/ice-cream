import { useNavigate, useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { useContext } from "react";

const Cart = () => {
  const navigate = useNavigate();
  
  
  const { cartItem, updateQuantity, removeCart } = useOutletContext();
  const TAX_RATE = 0.1;
  const subTotal = cartItem.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  const taxes = subTotal * TAX_RATE;
  const total = subTotal + taxes;
  return (
    <>
      <section className="bg-white px-1">
        <div className="max-w-[1080px] mx-auto py-[214px]">
          <h1 className="text-3xl font-bold text-center text-regularColor mb-14">
            {" "}
            Your Item({cartItem.length})
          </h1>
          {cartItem.length === 0 ? (
            <p className="text-center text-pColor">Your Cart id Emty</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 mb-7">
              {cartItem.map((item) => {
                // string to number
                const cleanPrice = parseFloat(
                  item.price.replace(/[^0-9.]/g, "")
                );
                return (
                  <div
                    className="border-b border-pColor/10 space-y-2 flex justify-between gap-4 items-center"
                    key={item.id}
                  >
                    <div className="flex gap-3 items-center">
                      <img
                        src={item.image}
                        alt=" Cart Item Image"
                        className="w-28 h-28 rounded"
                      />
                      <div className="">
                        <h3 className="text-[20px] font-bold text-regularColor">
                          {item.name}
                        </h3>
                        <p className="text-base font-normal text-pColor">
                          {item.title}
                        </p>
                        <p className="text-pink font-bold text-base">
                          {item.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-center justify-center">
                      {/* Plus  */}
                      <motion.button
                        onClick={() => updateQuantity(item.id, "increase")}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer w-6 h-6 rounded bg-green-600 text-white font-bold flex items-center justify-center"
                      >
                        <Plus size={20} />
                        {}
                      </motion.button>
                      <span className="border border-gray-200 w-20 h-10 rounded flex items-center justify-center">
                        {item.quantity}
                      </span>
                      {/* Minus  */}
                      <motion.button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer w-6 h-6 rounded bg-red-500 text-white font-bold flex items-center justify-center"
                      >
                        <Minus size={20} />
                        {}
                      </motion.button>
                      <div>
                        <span className="text-pink font-bold text-base">
                          $ {(cleanPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeCart(item.id)}
                        className="text-orange-500 font-semibold text-base cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="grid space-y-3">
            <p className="ml-auto font-bold border-b border-pColor/30">
              Sub Total: $ {subTotal.toFixed(2)}
            </p>
            <p className="ml-auto font-bold border-b border-pColor/30">
              Taxes: $ {taxes.toFixed(2)}
            </p>
            <p className="ml-auto font-bold border-b border-pColor/30">
              Total: $ {total.toFixed(2)}
            </p>
            <motion.button
              onClick={() => navigate("/checkout")}
              whileTap={{ scale: 0.9 }}
              className="bg-pink text-white hover:text-purple ml-auto font-semibold text-base w-[110px] h-[45px] rounded cursor-pointer"
            >
              Checkout
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
