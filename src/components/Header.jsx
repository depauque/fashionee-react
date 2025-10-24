import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "./AuthContext";

import "../styles/header.css";

import logo from "../assets/icons/logo.svg";
import arrow from "../assets/icons/arrow.svg";
import arrowPink from "../assets/icons/arrow-pink.svg";
import search from "../assets/icons/search.svg";
import user from "../assets/icons/user.svg";
import heart from "../assets/icons/heart.svg";
import cart from "../assets/icons/cart.svg";

function Header(props) {
  const { isLoggedIn, setAuth } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-menu-1">
        <div className="left-side">
          <div className="logo-container">
            <div className="burger-menu">
              <input
                type="checkbox"
                id="burger-checkbox"
                className="burger-checkbox"
              />
              <label className="burger" htmlFor="burger-checkbox"></label>
            </div>
            <div className="logo">
              <img src={logo} alt="Logo" className="logo" />
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <span>Home</span>
            </div>
            <div className="menu-item">
              <span>Pages</span>
              <img src={arrow} alt="Arrow" className="arrow-default" />
              <img src={arrowPink} alt="Pink arrow" className="arrow-hover" />
            </div>
            <div className="menu-item active">
              <span>Shop</span>
              <img src={arrow} alt="Arrow" className="arrow-default" />
              <img src={arrowPink} alt="Pink arrow" className="arrow-hover" />
            </div>
            <div className="menu-item">
              <span>Blog</span>
            </div>
            <div className="menu-item">
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="header-icon">
            <img src={search} alt="Search" />
          </div>
          <div className="header-icon">
            <img src={user} alt="Profile" />
          </div>
          {isLoggedIn === true ? (
            <div className="login-message">Вы авторизованы!</div>
          ) : (
            <div className="login-button" onClick={() => setAuth(true)}>
              Войти
            </div>
          )}
          <div className="header-icon">
            <img src={heart} alt="Favorites" />
            <div className="counter">{props.favCount}</div>
          </div>
          <Link
            className="header-icon"
            to="/cart"
            onClick={() => props.setCurrentPage("Cart")}
          >
            <img src={cart} alt="Cart" />
            <div className="counter">{props.cartCount}</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
