import { Link } from "react-router-dom";
import "../styles/content-block.css";
import dottedBg322 from "../assets/images/dotted-background_322x354.svg";

function ContentBlock(props) {
  return (
    <section>
      <div className="header-menu-2">
        <div className="menu-wrapper">
          <div className="background">
            <img src={dottedBg322} alt="Background" className="dotted" />
          </div>
          <div className="breadcrumbs-menu-wrapper">
            <div className="breadcrumbs-menu">
              <div className="title">{props.currentPage}</div>
              <div className="breadcrumbs">
                <div className="line"></div>
                <Link
                  to="/"
                  onClick={() => props.setCurrentPage("Home")}
                  className={props.currentPage === "Home" ? "current-page" : ""}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  onClick={() => props.setCurrentPage("Shop")}
                  className={props.currentPage === "Shop" ? "current-page" : ""}
                >
                  Shop
                </Link>
                <Link
                  to="/cart"
                  onClick={() => props.setCurrentPage("Cart")}
                  className={props.currentPage === "Cart" ? "current-page" : ""}
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header-img"></div>
      </div>
    </section>
  );
}

export default ContentBlock;
