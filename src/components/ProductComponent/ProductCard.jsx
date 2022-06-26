import "./ProductCard.css";
import { useCart } from "./../../cart-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    img,
    brand,
    newPrice,
    oldPrice,
    discount,
    size,
    rating
  } = product;

  const { cartState, cartDispatch } = useCart();
  const { ids } = cartState;
  const isItemInCart = () =>
    ids.length > 0 ? ids.some((Id) => Id === id) : false;
  useEffect(() => {
    console.log(ids);
  }, [ids]);
  const handleGotoCart = () => navigate("/cart");
  const handleAddtoCart = () => {
    console.log("added");
    console.log(isItemInCart());
    cartDispatch({
      type: "ADDTOCART",
      payload: id
    });
  };

  return (
    <div className="card card-vertical d-flex align-center direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={img} alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-title"> {brand}</div>
        <div className="card-description">
          <p className="card-des">{name}</p>
          <p className="card-price">
            Rs. {newPrice}
            <span className="price-strike-through">Rs. {oldPrice}</span>
            <span className="discount">({discount}% OFF)</span>
          </p>
          <p className="d-flex items-center jsutify-center">
            {rating} <span></span>
          </p>
        </div>

        <div className="cta-btn">
          <button
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
            onClick={() => {
              isItemInCart() ? handleGotoCart() : handleAddtoCart();
            }}
          >
            {isItemInCart() ? (
              <span>Go To Cart</span>
            ) : (
              <span>Add To Cart</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
