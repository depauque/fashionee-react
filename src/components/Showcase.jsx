/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import data from "../products.json";

import ProductCard from "./ProductCard";
import Search from "./Search";
import Categories from "./Categories";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import PagesList from "./PagesList";
import Sort from "./Sort";

import seasonSaleBanner from "../assets/images/season-sale-banner.svg";

import "../styles/shop.css";

const SEARCH_DELAY = 800;
const ITEMS_PER_PAGE = 9;
let searchTimer;

let categories = ["All"];
data.products.forEach((item) => categories.push(...item.categories));
categories = [...new Set(categories)];

let colors = [];
data.products.forEach((item) => colors.push(item.color));
colors = [...new Set(colors)];

function Showcase({
  handleFavoriteToggle,
  favorites,
  handleCart,
  cart,
  counter,
}) {
  const [listToRender, setListToRender] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [colorFilters, setColorFilters] = useState([]);
  const [sortType, setSortType] = useState("Relevance");

  const firstIndex = (currentPageIndex - 1) * ITEMS_PER_PAGE;
  const lastIndex = currentPageIndex * ITEMS_PER_PAGE;
  const pageToRender = listToRender.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(listToRender.length / ITEMS_PER_PAGE);
  const pagesList = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesList.push(i);
  }

  function handlePage(num) {
    if (num >= 1 && num <= totalPages) setCurrentPageIndex(num);
  }

  function handleSearch(value) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setSearchText(value);
    }, SEARCH_DELAY);
  }

  function handlePrices(value, index) {
    const copy = [...priceRange];
    copy[index] = +value;
    setPriceRange(copy);
  }

  function handleColors(color) {
    setColorFilters((prev) =>
      prev.includes(color)
        ? prev.filter((id) => id !== color)
        : [...prev, color]
    );
  }

  function applyFilters() {
    let filteredList = data.products;

    if (searchText) {
      const query = searchText.toLowerCase();
      filteredList = filteredList.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
    }

    if (activeCategory !== "All") {
      filteredList = filteredList.filter((item) =>
        item.categories.includes(activeCategory)
      );
    }

    if (priceRange[1] > 0) {
      filteredList = filteredList.filter(
        (item) => priceRange[0] <= item.price && item.price <= priceRange[1]
      );
    }

    if (colorFilters.length > 0) {
      filteredList = filteredList.filter((item) =>
        colorFilters.includes(item.color)
      );
    }

    setListToRender(filteredList);
    setCurrentPageIndex(1);
  }

  function handleSort(option) {
    let sorted;
    switch (option) {
      case "ASC_PRICE":
        sorted = [...listToRender].sort((a, b) => a.price - b.price);
        break;
      case "DESC_PRICE":
        sorted = [...listToRender].sort((a, b) => b.price - a.price);
        break;
      case "A_Z":
        sorted = [...listToRender].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z_A":
        sorted = [...listToRender].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Relevance":
      default:
        applyFilters();
        return;
    }

    setListToRender(sorted);
    setCurrentPageIndex(1);
  }

  useEffect(() => {
    applyFilters();
  }, [searchText]);

  useEffect(() => {
    handleSort(sortType);
  }, [sortType]);

  return (
    <div className="container">
      <div className="shop">
        <div className="sidebar">
          <Search handleSearch={handleSearch} />
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <PriceFilter priceRange={priceRange} handlePrices={handlePrices} />
          <ColorFilter colors={colors} handleColors={handleColors} />
          <div className="sidebar-item">
            <div className="button-wrapper">
              <button className="button" onClick={() => applyFilters()}>
                Apply Filter
              </button>
              <div className="vertical-line"></div>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-title">Reviewed by you</div>
            <div className="sidebar-content">
              <div className="reviewed-products">
                <div className="product">
                  <div className="image">
                    <img src="#" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">Retro style handbag</div>
                    <div className="price">
                      <div className="current-price">$35.99</div>
                      <div className="old-price">$52.99</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="image">
                    <img src="#" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">Warm casual sweater</div>
                    <div className="price">
                      <div className="current-price">$35.99</div>
                      <div className="old-price"></div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="image">
                    <img src="#" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">Textured turtleneck with zip</div>
                    <div className="price">
                      <div className="current-price">$35.99</div>
                      <div className="old-price"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <a href="#">
              <img src={seasonSaleBanner} alt="Season Sale Banner" />
            </a>
          </div>
        </div>

        <div className="products-wrapper">
          <Sort productsCount={listToRender.length} setSortType={setSortType} />

          <div className="products">
            {pageToRender.length === 0 ? (
              <div className="title">No products found</div>
            ) : (
              pageToRender.map((product) => (
                <ProductCard
                  key={product.id}
                  handleFavoriteToggle={handleFavoriteToggle}
                  favorites={favorites}
                  handleCart={handleCart}
                  cart={cart}
                  counter={counter}
                  {...product}
                />
              ))
            )}
          </div>

          <PagesList
            nums={pagesList}
            handlePage={handlePage}
            currentPage={currentPageIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
