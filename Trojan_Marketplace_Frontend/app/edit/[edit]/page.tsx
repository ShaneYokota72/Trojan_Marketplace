"use client";
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';


export default function EditListing( { searchParams }: {
    searchParams: {
        userID: number;
        itemID: number;
        name: string;
        image: string;
        description: string;
        price: number;
    };
}) {
    // onChange and useState functions reference: Stack Overflow, "Next.js form components wont allow to be edited once I give a value"
    const [itemName, setItemName] = useState(searchParams.name);
    const [itemPrice, setItemPrice] = useState(searchParams.price);
    const [itemImage, setItemImage] = useState(searchParams.image);
    const [itemDes, setItemDes] = useState(searchParams.description);

    return (
        <main className='flex flex-col min-h-screen flex items-center justify-start p-16'>
            
            {/* To be edited: header */}
            <div className="z-10 max-w-5xl w-full items-center justify-between font-serif text-sm lg:flex mb-4">
                <p className="fixed left-0 top-0 flex w-full justify-center   lg:static lg:w-auto   text-xl font-serif font-bold">
                <Link href="../..">
                TROJAN MARKETPLACE&nbsp;
                </Link>
                </p>
                <div className=' space-x-16 '>
                    <button className='text-base font-serif font-bold'>Search Item&nbsp;</button>

                    <button className='text-base font-serif font-bold'>Cart&nbsp;</button>

                    <Link href="/listing/[listing]">
                        <button className='text-base font-serif font-bold'>Listings&nbsp;</button>
                    </Link>
                    <button className='text-base font-serif font-bold'>Log Out&nbsp;</button>
                </div>
            </div>
            {/* To be edited: header */}


            <div className='w-10/12 h-full bg-[#f1f1f1]'>
            <form className="text-center p-8 border rounded-lg shadow-lg">
                {/*  2 lines - tailwind components for input box style https://v1.tailwindcss.com/components/forms */}
                {/* <h1 className="text-2xl font-bold mb-6">Create Listing</h1> */}
                <fieldset className="text-left mb-6">
                    <legend className="text-lg font-semibold mb-4">Create Listing</legend>
                    <div className="flex items-start mb-4">

                    <label htmlFor="item_name" className="main-label font-bold w-3/12 text-right mb-2">Item:</label>
                    <input
                        id="item_name"
                        className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5"
                        type="text"
                        required
                        value= {itemName} 
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    </div>
                    <div className="flex items-start mb-4">
                        <label htmlFor="item_price" className="main-label font-bold w-3/12 text-right mb-2">Price:</label>
                        <input id="item_price" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="number" step="0.01" value={itemPrice} 
                        onChange={(e) => setItemPrice(Number(e.target.value))} required/>
                    </div>
                    <div className="flex items-start mb-4">
                        <label htmlFor="item_image" className="main-label font-bold w-3/12 text-right mb-2">Image URL:</label>
                        <input id="item_image" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" value={itemImage} 
                        onChange={(e) => setItemImage(e.target.value)}/>
                    </div>
                    <div className="flex items-start mb-4">
                        <label htmlFor="item_description" className="main-label font-bold w-3/12 text-right mb-2">Item Description:</label>
                        <textarea id="item_description" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12" value={itemDes} 
                        onChange={(e) => setItemDes(e.target.value)}></textarea>
                    </div>
                    {/* <div className="flex items-start mb-4">
                        <label htmlFor="seller" className="main-label font-bold w-3/12 text-right mb-2">Seller Contact:</label>
                        <input id="seller" className="ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" placeholder="  Seller contact info"/>
                    </div> */}
                </fieldset>
                <div className="flex justify-between">
                    <div>
                        {/* Submit button updates the existing listing */}
                        <Link href="/listing/[listing]">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Submit
                            </button>
                        </Link>
                        {/* Delete button deletes the selected listing */}
                        <Link href="/listing/[listing]">
                            <button type="button" className="ml-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                        </Link>
                    </div>
                <Link href="/listing/[listing]">
                    <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                        Cancel
                    </button>
                </Link>
                </div>
            </form>
            </div>
        </main>
    )
}