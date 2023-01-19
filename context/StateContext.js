import { createContext, useContext, useState } from "react";

import product from "@/willcommerce-sanity/schemas/product";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) {
        return 1;
      }
      return prev - 1;
    });
  };

  let productToUpdate;
  let index;

  const onAdd = (product, quantity) => {
    const checkInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantity((prev) => prev + quantity);

    if (checkInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct + quantity,
          };
        }
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, product]);
    }

    toast.success(`${qty} ${product.name} added to cart.`);
  };

  const toggleCartItemQty = (id, value) => {
    productToUpdate = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      productToUpdate.quantity += 1;
      setCartItems([
        ...newCartItems,
        { ...productToUpdate, quantity: productToUpdate.quantity + 1 },
      ]);
      setTotalPrice((prev) => prev + productToUpdate.price);
      setTotalQuantity((prev) => prev + 1);
    } else if (value === "dec") {
      if (productToUpdate.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...productToUpdate, quantity: productToUpdate.quantity - 1 },
        ]);
        setTotalPrice((prev) => prev - productToUpdate.price);
        setTotalQuantity((prev) => prev - 1);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
