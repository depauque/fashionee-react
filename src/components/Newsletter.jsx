import "../styles/newsletter.scss";

import dottedBg130 from "../assets/images/dotted-background_130x130.svg";

function Newsletter() {
  return (
    <div className="newsletter-wrapper">
      <div className="container newsletter">
        <div className="background-img">
          <img src={dottedBg130} alt="Dotted image" className="dotted" />
        </div>
        <div className="newsletter-text">
          <div className="title">Newsletter</div>
          <div className="description">
            Be the first to hear about deals, offers and upcoming collections.
          </div>
        </div>
        <div className="form">
          <input type="text" placeholder="Enter your email" className="input" />
          <div className="button-wrapper">
            <button className="button">Subscribe</button>
            <div className="vertical-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
