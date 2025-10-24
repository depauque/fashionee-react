import CartBlock from "../components/CartBlock";

function Cart({ cart, handleCart, counter }) {
  return (
    <>
      <CartBlock cart={cart} handleCart={handleCart} counter={counter} />
    </>
  );
}

export default Cart;
