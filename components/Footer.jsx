import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; 2022 Willcommerce All Rights Reserved</p>

        <div className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </div>
      </div>
    </footer>
  );
};
