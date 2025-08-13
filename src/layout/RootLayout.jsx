import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTopButton from "../component/ui/BackToTopButton";
import { useState, useCallback, useEffect } from "react";
import { useLoader } from "../context/LoderContex";  
import Loader from "../component/shareComponents/Loder"; 
         

const RootLayout = () => {
  
  const { loading } = useLoader();


  // Add To Cart
  const [cartItem, setCartItem] = useState(() => {
    const saveCart = localStorage.getItem("cartItem");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  // increase & decrease function
  const updateQuantity = useCallback((id, action) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  }, []);

  // Add To Cart
  const handleAddToCart = useCallback((product) => {
    setCartItem((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  // Remove Cart
  const removeCart = useCallback((id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
  });

  // clear Cart
  const clearCart = () => {
    setCartItem([]);
  };

  return (
    <>
      
      {loading && <Loader />}

      <Header cartItem={cartItem}/>
      <Outlet
        context={{
          cartItem,
          handleAddToCart,
          updateQuantity,
          removeCart,
          clearCart,
        }}
      />
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default RootLayout;
