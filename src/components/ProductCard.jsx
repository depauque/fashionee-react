import heart from "../assets/icons/heart.svg";
import heartRed from "../assets/icons/heart-red.svg";

function ProductCard(props) {
  return (
    <div className="product">
      <div className="photo">
        <img src={props.image} alt={props.name} className="product-img" />
        <div className="top-bar">
          <div className="labels">
            {props.isNew && <div className="label new">New</div>}
            {props.isSale && <div className="label sale">Sale</div>}
          </div>
          <img
            src={props.favorites.includes(props.id) ? heartRed : heart}
            onClick={() => props.handleFavoriteToggle(props.id)}
            alt="Favorites"
            className="favorite-icon"
          />
        </div>
      </div>
      <div className="product-info">
        <div className="product-name">{props.name}</div>
        <div className="price">
          <div className="current-price">${props.price}</div>
          {props.oldPrice && <div className="old-price">${props.oldPrice}</div>}
        </div>
      </div>

      {props.cart.includes(props.id) ? (
        <div className="add-remove-btns">
          <div
            onClick={() => props.handleCart(props.id, false)}
            className="button"
          >
            -
          </div>
          <span className="counter">{props.counter(props)}</span>
          <div
            onClick={() => props.handleCart(props.id, true)}
            className="button"
          >
            +
          </div>
        </div>
      ) : (
        <div
          onClick={() => props.handleCart(props.id, true)}
          className="button"
        >
          Buy
        </div>
      )}
    </div>
  );
}

export default ProductCard;
