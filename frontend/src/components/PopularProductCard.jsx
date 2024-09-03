import { star, cartIcon } from "../assets/icons";

const PopularProductCard = ({
  imgURL,
  name,
  price,
  setSelected,
  selected,
  product,
  rating = 5,
  reviewsCount = 0,
  description = "No description available",
  inStock = true,
  discount = null,
}) => {
  const handleClick = (product) => {
    if (selected !== product || !selected) {
      setSelected(product);
    } else {
      setSelected(null);
    }
  };

  return (
    <div
      onClick={() => handleClick(product)}
      className={`relative py-4 flex-1 w-full items-center justify-center flex flex-col max-sm:w-full cursor-pointer ${
        selected === product ? "border-2 border-gray-600/30 rounded-2xl" : ""
      }`}
    >
      {discount && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {discount}% OFF
        </div>
      )}
      <img src={imgURL} alt={name} className="w-[282px] h-[282px] object-cover" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="text-xl leading-normal font-montserrat text-slate-gray">
          {rating} ({reviewsCount})
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-lg font-medium leading-normal font-montserrat text-gray-500 text-center px-4">
        {description}
      </p>
      <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red">
        {price}
      </p>
      <p className="mt-1 text-sm font-medium leading-normal font-montserrat text-green-500">
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
      {selected === product && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            // handle add to cart logic
          }}
          className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-full flex items-center gap-2"
        >
          <img src={cartIcon} alt="cart icon" width={16} height={16} />
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default PopularProductCard;
