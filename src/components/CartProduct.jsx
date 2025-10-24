function CartProduct(props) {
  return (
    <div className="product">
      <div className="photo">
        <img src={props.image} alt={props.name} className="cart-product-img" />
      </div>
      <div className="product-info">
        <div className="title">{props.name}</div>
        <div className="price-wrapper">
          <div className="price-and-quantity">
            <div className="price">
              <div className="current-price">${props.price}</div>
              {props.oldPrice && (
                <div className="old-price">${props.oldPrice}</div>
              )}
            </div>
            <div className="quantity">
              <div
                className="remove-button"
                onClick={() => props.handleCart(props.id, false)}
              >
                -
              </div>
              <div className="counter">{props.counter(props)}</div>
              <div
                className="add-button"
                onClick={() => props.handleCart(props.id, true)}
              >
                +
              </div>
            </div>
          </div>
          <div className="total-price">
            ${(props.price * props.counter(props)).toFixed(2)}
          </div>
        </div>
        <div
          className="close"
          onClick={() => props.handleCart(props.id, false, true)}
        >
          x
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
