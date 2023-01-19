import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import { urlFor } from "@/lib/client";
import { useRef } from "react";
import { useStateContext } from "@/context/StateContext";

export const Cart = () => {
  const cartRef = useRef(null);
  const {
    totalPrice,
    totalQuantity,
    qty,
    cartItems,
    decQty,
    incQty,
    setShowCart,
    toggleCartItemQty,
  } = useStateContext();

  return (
    <div ref={cartRef} className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">{totalQuantity} items</span>
        </button>

        {cartItems.length < 1 ? (
          <div className="empty-cart">
            <AiOutlineShoppingCart size={100} color="gray" />
            <h3>Your shoping cart is empty</h3>
            <Link href="/">
              <button onClick={() => setShowCart(false)} className="btn">
                Continue shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="product-container">
              {cartItems.map((item) => (
                <div key={item._id} className="product">
                  <Image
                    src={urlFor(item.image[0])}
                    width={100}
                    height={100}
                    alt={item.name}
                    className="cart-product-image"
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>Ghc{item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() => toggleCartItemQty(item._id, "dec")}
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num">{item.quantity}</span>
                          <span
                            className="plus"
                            onClick={() => toggleCartItemQty(item._id, "inc")}
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button className="remove-item">
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button className="btn">Pay with Stripe</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
