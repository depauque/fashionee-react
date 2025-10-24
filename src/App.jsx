import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import AuthContext from "./components/AuthContext";
import Header from "./components/Header";
import ContentBlock from "./components/ContentBlock";
import Footer from "./components/Footer";

import "./styles/reset.scss";
import "./styles/commons.scss";

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.replace("/fashionee-react", "");
    const pageName = path === "/" ? "home" : path.slice(1);
    return pageName.charAt(0).toUpperCase() + pageName.slice(1);
  });

  const [favorites, setFavorites] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("favorites"));
    return stored || [];
  });

  const [cart, setCart] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("cart"));
    return stored || [];
  });

  const [isLoggedIn, setAuth] = useState(false);

  function handleFavoriteToggle(productId) {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }

  function handleCart(productId, add, fullBlast) {
    // add - параметр удаления/добавления
    // fullBlast - удаление всех экземпляров товара из корзины
    fullBlast
      ? setCart((prev) =>
          prev.includes(productId)
            ? prev.filter((id) => id !== productId)
            : null
        )
      : add
      ? setCart((prev) => (prev ? [...prev, productId] : [productId]))
      : setCart((prev) => {
          const index = prev.indexOf(productId);
          return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
  }

  function counter(item) {
    let num = 0;
    num = cart.filter((id) => id == item.id);
    return num.length;
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [favorites, cart]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setAuth }}>
      <Router basename="/fashionee-react">
        <Header
          favCount={favorites.length}
          cartCount={cart.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ContentBlock
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Routes>
          <Route
            path="/shop"
            element={
              <Shop
                handleFavoriteToggle={handleFavoriteToggle}
                favorites={favorites}
                handleCart={handleCart}
                cart={cart}
                counter={counter}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} handleCart={handleCart} counter={counter} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
