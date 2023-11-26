'use client';
import React from 'react';
import Image from 'next/image';
import CartButton from '../components/ClientStateForCartBtn';
export default function Product() {
  // export a product data from the back end.
  const product = {
    itemID: 1,
    name: 'Trojan Mug',
    image: '/product.jpg',
    description: 'Super cool mug. Fight on!',
    seller: 'Tommy Trojan',
    price: 10,
    category: 'USC',
  };

  return (
    <main className="h-full w-full bg-gray-200">
      <div className="mb-4">
        <a
          href="#" // to the main page
          className="inline-block bg-red-700 hover:bg-red-500 active:bg-red-700 text-white text-base font-medium py-2 px-6 m-2.5 rounded-md transition-all duration-500"
        >
          Back to the Marketplace
        </a>
      </div>
      <div className="max-w-6xl mx-auto p-4 flex">
        <div className="w-2/3 relative">
          <Image src={product.image} alt={'product'} width={500} height={500} />
        </div>
        <div className="w-1/3 mt-16">
          <div className="border-b-2 border-gray-300 mb-4 pb-4">
            <span className="text-xs text-blue-500 uppercase">
              Product Category - {product.category}
            </span>
            <h1 className="text-4xl font-light text-gray-700 leading-tight">
              {product.name}
            </h1>
            <p className="text-base font-light text-gray-600 leading-6">
              {product.description}
            </p>
          </div>
          <div className="border-b-2 border-gray-300 mb-4 pb-4">
            <span className="text-xs text-blue-500 uppercase">
              About the seller
            </span>
            <p className="text-base font-light text-gray-600 leading-6">
              {product.seller}
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-light text-gray-700 mr-4">
              ${product.price}
            </span>
            <CartButton />
          </div>
        </div>
      </div>
    </main>
  );
}
