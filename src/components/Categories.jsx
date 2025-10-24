import "../styles/shop.scss";

function Categories({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-content">
        <ul className="custom-list">
          {categories.map((cat, i) => {
            return (
              <li
                key={i}
                className={activeCategory === cat ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
