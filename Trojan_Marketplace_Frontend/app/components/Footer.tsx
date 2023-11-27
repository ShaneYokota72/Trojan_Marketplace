'use client'
import logo from '/public/trojanhead.png'; 
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
const Footer = () => {
  let userID = 1; // placeholder value
  return (
    <footer className="bg-cardinal text-#FFFF00 px-4 py-2 flex justify-between items-center">
      <div className="flex items-center flex-grow">

        <Image src={logo} alt="Logo" width={50} height={50} className="w-12 h-12" />

        <h1 className="ml-2 font-bold text-gold">Trojan Marketplace</h1> 
      </div>
      <nav className="flex gap-20 items-start mb-2">

        <Link href="/" className="text-white hover:text-gold transition-colors ease-in-out duration-300 underline">Search Item
        </Link>
        <Link href={'/cart/${userID}'} className="text-white hover:text-gold transition-colors ease-in-out duration-300 underline">Cart 
        </Link>
        <Link href="/" className="text-white mr-10 hover:text-gold transition-colors ease-in-out duration-300 underline">Listings
        </Link>
      </nav>

     
    </footer>
  );
};

export default Footer;