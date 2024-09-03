import React from "react";

const Cart = ({ cartItems }) => {
  console.log("Cart Items:", cartItems); 

  return (
    <div className="container mx-auto p-4 border border-gray-300">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="border-b py-2 flex items-center">
              <img
                src={item.imgURL}
                alt={item.name}
                className="w-20 h-20 inline-block"
              />
              <span className="ml-4">{item.name}</span>
              <span className="ml-4 text-coral-red">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;