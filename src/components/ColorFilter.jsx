import "../styles/shop.css";

function ColorFilter({ colors, handleColors }) {
  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Colors</div>
      <div className="sidebar-content">
        <div className="colors">
          {colors.map((color) => {
            return (
              <div key={color} className="color">
                <input
                  type="checkbox"
                  className="color-checkbox"
                  id={color}
                  name={color}
                  value={color}
                  onClick={() => handleColors(color)}
                />
                <label htmlFor={color} className="color-name">
                  {color}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColorFilter;
