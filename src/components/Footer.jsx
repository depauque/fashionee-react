import "../styles/footer.scss";

import logo from "../assets/icons/logo.svg";
import dottedBg130 from "../assets/images/dotted-background_130x130.svg";
import dottedBg290 from "../assets/images/dotted-background_290x290.svg";
import newsletter from "../assets/icons/newsletter.svg";
import visa from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";
import paypal from "../assets/icons/paypal.svg";
import payoneer from "../assets/icons/payoneer.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="dotted-image-1">
        <img src={dottedBg130} alt="Dotted image" className="dotted" />
      </div>
      <div className="container">
        <div className="footer-info">
          <div className="column column-1">
            <div className="logo">
              <img src={logo} alt="Logo" className="logo-img" />
            </div>
            <div className="brand-description">
              Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
              nostrud excepteur voluptate.
            </div>
            <div className="find-us">
              <div className="find-us-text">Find us here:</div>
              <div className="find-us-links">
                <div className="find-us-link">
                  <a href="">FB</a>
                </div>
                <div className="line"></div>
                <div className="find-us-link">
                  <a href="">TW</a>
                </div>
                <div className="line"></div>
                <div className="find-us-link">
                  <a href="">INS</a>
                </div>
                <div className="line"></div>
                <div className="find-us-link">
                  <a href="">PT</a>
                </div>
              </div>
            </div>
          </div>
          <div className="column column-2">
            <div className="title">About</div>
            <ul className="custom-list">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Collections</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="column column-3">
            <div className="title">Useful Links</div>
            <ul className="custom-list">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of use</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Shipping details</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="column column-4">
            <div className="title">Newsletter</div>
            <div className="newsletter-text">
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </div>
            <div className="newsletter-form">
              <form action="">
                <label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input"
                  />
                  <img src={newsletter} alt="Subscribe" className="send-icon" />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div>© All right reserved. Fashionee 2020</div>
          <div className="payment-methods-container">
            <div>Payment methods:</div>
            <div className="payment-methods">
              <div className="payment-method">
                <img src={visa} alt="Visa" />
              </div>
              <div className="payment-method">
                <img src={mastercard} alt="Mastercard" />
              </div>
              <div className="payment-method">
                <img src={paypal} alt="PayPal" />
              </div>
              <div className="payment-method">
                <img src={payoneer} alt="Payoneer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dotted-image-2">
        <img src={dottedBg290} alt="Dotted image" className="dotted" />
      </div>
    </footer>
  );
}

export default Footer;
