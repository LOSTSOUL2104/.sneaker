import { useState } from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({
  imgURL,
  name,
  price,
  setSelected,
  selected,
  product,
  addToCart,
  onAddToCartClick,
}) => {
  const handleClick = (product) => {
    if (selected !== product || !selected) {
      setSelected(product);
    } else {
      setSelected(null);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    onAddToCartClick();
  };

  return (
    <div
      onClick={() => handleClick(product)}
      className={`py-4 flex-1 w-full items-center justify-center flex flex-col max-sm:w-full ${
        selected === product ? "border-2 border-gray-600/30 rounded-2xl" : ""
      }`}
    >
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="text-xl leading-normal font-montserrat text-slate-gray">
          (5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red">
        {price}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click from triggering the handleClick function
          handleAddToCart();
        }}
        className="mt-4 px-4 py-2 bg-coral-red text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PopularProductCard;