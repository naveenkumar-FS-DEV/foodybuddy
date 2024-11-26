import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // subscribing to the store
  let cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="header-container">
        <div className="logo">
          <img src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul className={isMenuOpen ? "active" : ""}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About us</li>
            </Link>
            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
            <Link to="/cart">
              <li>Cart - {cartItems.length}</li>
            </Link>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <RxHamburgerMenu size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
