'use client';
import { useEffect, useState } from "react";
import Footer from "./Footer";
import CartItem from "./CartItem";

/* Cart() parses array of items from API and displays them in table format.
* It also handles item removal ("Remove Item" button) 
* and contains the ContactSeller component ("Contact Seller" button + form)
* TODO? move form to another page instead
*/
interface ListItem {
    userId: number;
    id: number;
    name: string;
    image: string;
    description: String;
    status: String;
    price: number;
}

interface CartItem {
    id:number;
    listing: ListItem;
}

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

async function getcart() {
    const uid = await getcookie();
    const res = await fetch(`http://localhost:8000/cart/get/${uid}`, {
      method: 'GET',  
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json();
    console.log(data);
    return data;
}

export default function Cart() {

    const [items, setItems] = useState<CartItem[]>([])
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        console.log('useEffect cart.tsx');
        const api = async () => {
            const response = await getcart();
            setItems(response as unknown as CartItem[]);
        };
        api();
    }, [refresh]);

    // returns the full cart page in table format
    return (
        <div>
            <div className='flex min-h-screen flex-col items-center w-full'>
                <div className='w-10/12 h-full'>
                    <div className='flex justify-between items-center'>
                        <h1 className='lg:text-xl sm:text-lg font-serif font-bold text-left px-10 py-6'>My Cart</h1>
                    </div>
                    <div className='px-8'>
                        <div className='border-t-2 border-gray-500 border-opacity-50 '></div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6 className='font-serif px-20 py-6'>Item(s): {items.length}</h6>
                        <h6 className='font-serif px-20 py-6'>Actions</h6>
                    </div>
                </div>

                <div className='w-10/12 flex flex-col justify-center items-center'>
                    {items.map((element, index) => (
                        <CartItem element={element} index={index} onDelete={() => {setRefresh(prev => prev + 1)}} />
                        ))}
                </div>
            </div>
        </div>
      );

    
}