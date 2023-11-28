"use client"
import React,{useEffect, useState} from 'react';
import Link from 'next/link';
import MarketPlaceHeader from '../components/MarketPlaceHeader';
import Footer from '../components/Footer';
import Listing from '@/app/components/Listing';

interface ListItem {
    userId: number;
    id: number;
    name: string;
    image: string;
    description: String;
    status: String;
    price: number;
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
    const res = await fetch(`http://localhost:8000/listing/get/${uid}`, {
      method: 'GET',  
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json();
    return data;
}

export default function Listings() {
    const [listingItems, setlistingItems] = useState<ListItem[]>([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        console.log('useEffect');
        const api = async () => {
            const response = await getcart();
            // return response;
            setlistingItems(response as unknown as ListItem[]);
        };
        api();
    }, [refresh]);
    
    return (
        <div className='flex flex-col w-full'>
            <MarketPlaceHeader />
            <div className='flex min-h-screen flex-col items-center w-full'>
                <div className='w-10/12 h-full'>
                    <div className='flex justify-between items-center'>
                        <h1 className='lg:text-xl sm:text-lg font-serif font-bold text-left px-10 py-6'>My Listing</h1>
                        <Link className='border-1 mr-8 border-gray-300 static w-auto rounded-xl border bg-gray-200 px-4 py-2 my-2 hover:bg-gray-300' href={'/create'}>Add Listing</Link>
                    </div>
                    <div className='px-8'>
                        <div className='border-t-2 border-gray-500 border-opacity-50 '></div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h6 className='font-serif px-20 py-6'>Item(s): {listingItems.length}</h6>
                        <h6 className='font-serif px-20 py-6'>Actions</h6>
                    </div>
                </div>

                <div className='w-10/12 flex flex-col  justify-center items-center'>
                    {listingItems.map((element, index) => (
                        <Listing element={element} index={index} onDelete={() => setRefresh(prev => prev + 1)}/>
                    ))}
                </div>
            </div>
        </div>
        
      )
}
