"use client"
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/trojanhead.png'; // Adjust the path to where your image is located
//import {useRouter} from 'next/navigation'
import React, { useEffect, useState } from 'react';

// put this outside of the component function
async function getcookie() {
  const res = await fetch('http://localhost:8000/auth/getcookie', {
    method: 'GET',  
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
 
  const data = await res.json();
  return data;
}



const Footer = () => {

 // const router = useRouter();
  const [loggedin, setloggedin] = useState(false);

useEffect(() => {
    const api = async () => {
      const response = await getcookie();
      if (response !== 0) {
        // response should be the user-id
        // implement your functionality here using the response as the user-id
        setloggedin(true)

      }
      else {
        setloggedin(false); 
      }
    }
    api();
  },[])
  let userID = 1; // placeholder value ( should ideally come from user state)

  return (
    <footer className="bg-cardinal text-#FFFF00 px-4 py-2 flex justify-between items-center">
      <div className="flex items-center flex-grow">
        <Image src={logo} alt="Logo" width={50} height={50} className="w-12 h-12" />
        <h1 className="ml-2 font-bold text-gold">Trojan Marketplace</h1>
      </div>

      {loggedin && (
        <nav className="flex gap-20 items-start mb-2">
          <Link href="/" className="text-white hover:text-gold transition-colors ease-in-out duration-300 underline">Search Item</Link>
          <Link href={`/cart/${userID}`} className="text-white hover:text-gold transition-colors ease-in-out duration-300 underline">Cart</Link>
          <Link href="/" className="text-white mr-10 hover:text-gold transition-colors ease-in-out duration-300 underline">Listings</Link>
        </nav>
      )}
    </footer>
  );
};

export default Footer;

