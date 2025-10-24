import Showcase from "../components/Showcase";
import Newsletter from "../components/Newsletter";

function Shop({ handleFavoriteToggle, favorites, handleCart, cart, counter }) {
  return (
    <>
      <Showcase
        handleFavoriteToggle={handleFavoriteToggle}
        favorites={favorites}
        handleCart={handleCart}
        cart={cart}
        counter={counter}
      />
      <Newsletter />
    </>
  );
}

export default Shop;
