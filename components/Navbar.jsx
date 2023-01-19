import { AiOutlineShoppingCart } from "react-icons/ai";
import { Cart } from "./Cart";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";

export const Navbar = () => {
  const { showCart, totalQuantity, setShowCart } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Willcommerce</Link>
      </p>

      <button className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantity}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};
