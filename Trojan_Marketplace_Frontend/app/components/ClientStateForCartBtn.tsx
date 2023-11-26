'use client';
import React, { useState } from 'react';
//use client
const CartButton = () => {
  const [isInCart, setIsInCart] = useState(false);

  const handleClick = () => {
    setIsInCart(!isInCart);
  };

  return (
    <a
      href="#" // to the cart page
      onClick={handleClick}
      className={`inline-block bg-red-700 hover:bg-red-500 active:bg-red-700 text-white text-base font-medium py-2 px-6 rounded-md transition-all duration-500 ${
        isInCart ? 'bg-gray-500' : ''
      }`}
    >
      {isInCart ? 'Remove from cart' : 'Add to cart'}
    </a>
  );
};

export default CartButton;
