import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Willcommerce</Link>
      </p>

      <button className="cart-icon">
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">3</span>
      </button>
    </div>
  );
};
