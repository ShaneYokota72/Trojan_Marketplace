'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import MarketPlaceHeader from '@/app/components/MarketPlaceHeader';


export default function Product() {
  const params = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image , setImage] = useState('');
  const [price, setPrice] = useState('');
  const [user, setUser] = useState('');
  const [useremail, setUseremail] = useState('');


  useEffect(() => {
    const api = async () => {
      const response = await fetch(`http://localhost:8000/listing/getitem/${params.product}`, {
          method: 'GET',  
          headers: {
            'Content-Type': 'application/json'
          },
      })
      const data = await response.json();
      setName(data.name);
      setDescription(data.description);
      setImage(data.image);
      setPrice(data.price);

      const userinfo = await fetch(`http://localhost:8000/auth/getone/${data.userId}`, {
        method: 'GET',  
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      })
      const user = await userinfo.json();
      setUser(user.fname + ' ' + user.lname);
      setUseremail(user.email);
    }
    api();
  },[])

  return (
    <>
    <MarketPlaceHeader />
    <main className="h-full w-full bg-gray-200">
      <div className="mb-4">
        <a
          href="/marketplaceuser" // to the main page
          className="inline-block bg-red-700 hover:bg-red-500 active:bg-red-700 text-white text-base font-medium py-2 px-6 m-2.5 rounded-md transition-all duration-500"
          >
          Back to the Marketplace
        </a>
      </div>
      <div className="max-w-6xl mx-auto p-4 flex pb-40">
        <div className="w-2/3 relative">
          <Image src={image} alt={'product'} width={500} height={500} />
        </div>
        <div className="w-1/3 mt-16">
          <div className="border-b-2 border-gray-300 mb-4 pb-4">
            <span className="text-xs text-blue-500 uppercase">
              Product
            </span>
            <h1 className="text-4xl font-light text-gray-700 leading-tight">
              {name}
            </h1>
            <p className="text-base font-light text-gray-600 leading-6">
              {description}
            </p>
          </div>
          <div className="border-b-2 border-gray-300 mb-4 pb-4">
            <span className="text-xs text-blue-500 uppercase">
              About the seller
            </span>
            <p className="text-base font-light text-gray-600 leading-6">
              {user} - {useremail}
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-light text-gray-700 mr-4">
              ${price}
            </span>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
