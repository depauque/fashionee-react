import "../styles/shop.scss";
import search from "../assets/icons/search.svg";

function Search({ handleSearch }) {
  return (
    <div className="search">
      <label>
        <input
          type="text"
          placeholder="Search"
          className="input search-bar"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <img src={search} alt="Search" className="search-icon" />
      </label>
    </div>
  );
}

export default Search;
