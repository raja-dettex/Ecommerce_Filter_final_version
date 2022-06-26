import Navbar from "./../components/Navbar/Navbar";
import { Filter } from "./../components/Filter/Filter";
import { Fragment, useEffect, useState } from "react";
import { useCart } from "./../cart-context";
import axios from "axios";
import { CartProductCard } from "../components/cart/cartProductCard";
export const Cart = () => {
  const { cartState } = useCart();
  const [cartItems, setCartItems] = useState([]);
  const { ids } = cartState;
  useEffect(() => {
    (async () => {
      const {
        data: { data }
      } = await axios.get("Products.json");
      setCartItems(data);
    })();
  });
  const getFilteredItems = (items, cartIds) => {
    return items.filter((item) => cartIds.includes(item.id));
  };
  const filteredItems =
    ids.length > 0 ? getFilteredItems(cartItems, ids) : null;

  return (
    <Fragment>
      <Navbar />
      <div className="d-flex gap">
        <Filter />
        <main className="main d-flex gap wrap">
          {filteredItems === null
            ? "No Items has been added to the cart"
            : filteredItems.map((item) => {
                return <CartProductCard key={item.id} product={item} />;
              })}
        </main>
      </div>
    </Fragment>
  );
};
