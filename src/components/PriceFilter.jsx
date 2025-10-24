import "../styles/shop.scss";

function PriceFilter({ priceRange, handlePrices }) {
  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Price</div>
      <div className="sidebar-content">
        <div className="price-bar">
          <input
            type="number"
            placeholder="0"
            value={priceRange[0]}
            onChange={(e) => handlePrices(e.target.value, 0)}
            className={
              priceRange[0] > priceRange[1] ? "input red-price" : "input"
            }
          />
          <input
            type="number"
            placeholder="0"
            value={priceRange[1]}
            onChange={(e) => handlePrices(e.target.value, 1)}
            className={
              priceRange[0] > priceRange[1] ? "input red-price" : "input"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
