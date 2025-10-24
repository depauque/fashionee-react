function Sort({ productsCount, setSortType }) {
  return (
    <div className="sort-and-count">
      <div className="products-count">
        There are <span className="bold">{productsCount}</span> products in this
        category
      </div>
      <div className="sort">
        <select className="input" onChange={(e) => setSortType(e.target.value)}>
          <option value="Relevance">By relevance</option>
          <option value="ASC_PRICE">From LOW to HIGH</option>
          <option value="DESC_PRICE">From HIGH to LOW</option>
          <option value="A_Z">From A to Z</option>
          <option value="Z_A">From Z to A</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
