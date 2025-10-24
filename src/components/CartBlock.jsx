import "../styles/cart.css";
import data from "../products.json";
import CartProduct from "./CartProduct";

import buttonArrow from "../assets/icons/button-arrow.svg";
import { useEffect, useState, useRef } from "react";

function CartBlock({ cart, handleCart, counter }) {
  const [orderPrice, setOrderPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [promoCode, setPromoCode] = useState(false);
  const inputRef = useRef("");

  const DELIVERY = cart.length > 0 ? 15 : 0;

  function handlePromo(code) {
    code === "ilovereact" ? setPromoCode(true) : setPromoCode(false);
  }

  function handleOrder(cartArr) {
    let sum = 0;
    cartArr.forEach((id) => {
      const product = data.products.find((p) => p.id === id);
      if (product) {
        sum += product.price;
      }
    });
    setOrderPrice(sum);
    promoCode
      ? setTotalPrice(sum * 0.9 + DELIVERY)
      : setTotalPrice(sum + DELIVERY);
  }

  function showCheckout() {
    console.group();
    console.log("Your order:");
    data.products.map((item) =>
      cart.includes(item.id)
        ? console.log(
            `Name: ${item.name} | Price: $${item.price} | Quantity: ${counter(
              item
            )}`
          )
        : null
    );
    console.log(
      `🛒 Оrder price: $${orderPrice.toFixed(2)} | Discount: ${
        promoCode ? "10%" : "No"
      } | Delivery: $${DELIVERY} | TOTAL: $${totalPrice.toFixed(2)}`
    );
    console.groupEnd();
  }

  useEffect(() => {
    handleOrder(cart), [cart];
  });

  return (
    <div className="container">
      <div className="cart">
        <div className="order-wrapper">
          <div className="product-list">
            {data.products.map((item) =>
              cart.includes(item.id) ? (
                <CartProduct
                  key={item.id}
                  cart={cart}
                  handleCart={handleCart}
                  counter={counter}
                  {...item}
                />
              ) : null
            )}
          </div>
          <div className="order">
            <div className="title">Your Order</div>
            <div className="order-price-wrapper">
              <div className="price-row">
                <div className="name">Оrder price</div>
                <div className="price">${orderPrice.toFixed(2)}</div>
              </div>
              <div className="price-row">
                <div className="name">Discount for promo code</div>
                <div>{promoCode ? "10%" : "No"}</div>
              </div>
              <div className="price-row delimiter">
                <div className="name">
                  Delivery
                  <span className="additional"> (Aug 02 at 16:00)</span>
                </div>
                <div className="price">${DELIVERY}</div>
              </div>
              <div className="price-row total">
                <div className="name">Total</div>
                <div className="price">${totalPrice.toFixed(2)}</div>
              </div>
            </div>
            <div className="button-wrapper">
              <button className="button" onClick={() => showCheckout()}>
                Checkout
              </button>
              <div className="vertical-line"></div>
            </div>
          </div>
        </div>
        <div className="promo-code-wrapper">
          <div className="info">
            <div className="title">You Have A Promo Code?</div>
            <div className="description">
              To receive up-to-date promotional codes, subscribe to us on social
              networks.
            </div>
          </div>
          <div className="promo-code">
            <input
              type="text"
              name="promo-code"
              className="input"
              placeholder="Enter promo code"
              ref={inputRef}
              onChange={() => handlePromo(inputRef.current.value)}
            />
            <div className="button-wrapper">
              <div
                className="button"
                /* onClick={() => handlePromo(inputRef.current.value)} */
              >
                <img src={buttonArrow} alt="Arrow Icon" />
              </div>
              <div className="vertical-line"></div>
            </div>
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
      </div>
    </div>
  );
}

export default CartBlock;
