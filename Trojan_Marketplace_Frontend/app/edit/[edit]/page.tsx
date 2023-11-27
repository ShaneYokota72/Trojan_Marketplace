"use client";
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import MarketPlaceHeader from '../../components/MarketPlaceHeader';
import Footer from '../../components/Footer';


export default function EditListing( { searchParams }: {
    /*
        Button ID: edit-btn:
            Edits chosen active (status=true) listing
            input IDs: item_name, item_price, item_image, item_description
            values: itemName, itemPrice, itemImage, itemDes
            Input fields are disabled for status = false

        Button ID: delete-btn:
            Deletes currently active listing
    */
    // Receiving information from the listing page
    searchParams: {
        userID: number;
        itemID: number;
        name: string;
        image: string;
        description: string;
        status: string; // Actually boolean but searchParams returns as a string
        price: number;
    };
}) {
    // onChange and useState functions reference: Stack Overflow, "Next.js form components wont allow to be edited once I give a value"
    const [itemName, setItemName] = useState(searchParams.name);
    const [itemPrice, setItemPrice] = useState(searchParams.price);
    const [itemImage, setItemImage] = useState(searchParams.image);
    const [itemDes, setItemDes] = useState(searchParams.description);

    return (
        <div className='flex flex-col w-full'>
            <MarketPlaceHeader />
        <main className='flex flex-col min-h-screen flex items-center justify-start p-16'>
            <div className='w-10/12 h-full bg-[#f1f1f1]'>
            <form className="text-center p-8 border rounded-lg shadow-lg">
                {/*  2 lines - tailwind components for input box style https://v1.tailwindcss.com/components/forms */}
                {/* <h1 className="text-2xl font-bold mb-6">Create Listing</h1> */}
                <fieldset className="text-left mb-6">
                    <legend className="text-lg font-semibold mb-4">Edit Listing</legend>
                    <div className="flex items-start mb-4">

                    <label htmlFor="item_name" className="main-label font-bold w-3/12 text-right mb-2">Item:</label>
                    { searchParams.status === 'true' ? (
                        <input
                        id="item_name" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" required value= {itemName} onChange={(e) => setItemName(e.target.value)} />
                    ) : (
                        <input disabled 
                        id="item_name" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" required value= {itemName} onChange={(e) => setItemName(e.target.value)} />
                    ) }

                    </div>
                    
                    <div className="flex items-start mb-4">
                        <label htmlFor="item_price" className="main-label font-bold w-3/12 text-right mb-2">Price:</label>
                        { searchParams.status === 'true' ? (
                            <input id="item_price" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="number" step="0.01" value={itemPrice} 
                            onChange={(e) => setItemPrice(Number(e.target.value))} required/>
                        ) : (
                            <input disabled id="item_price" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="number" step="0.01" value={itemPrice} 
                            onChange={(e) => setItemPrice(Number(e.target.value))} required/>
                        ) }
                        
                        
                    </div>
                    <div className="flex items-start mb-4">
                        <label htmlFor="item_image" className="main-label font-bold w-3/12 text-right mb-2">Image URL:</label>
                        { searchParams.status === 'true' ? (
                            <input id="item_image" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" value={itemImage} 
                            onChange={(e) => setItemImage(e.target.value)}/>
                        ) : (
                            <input disabled id="item_image" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" value={itemImage} 
                            onChange={(e) => setItemImage(e.target.value)}/>
                        ) }
                        
                    </div>
                    <div className="flex items-start mb-4">
                        <label htmlFor="item_description" className="main-label font-bold w-3/12 text-right mb-2">Item Description:</label>
                        { searchParams.status === 'true' ? (
                            <textarea id="item_description" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12" value={itemDes} 
                            onChange={(e) => setItemDes(e.target.value)}></textarea>
                        ) : (
                            <textarea disabled id="item_description" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12" value={itemDes} 
                        onChange={(e) => setItemDes(e.target.value)}></textarea>
                        ) }
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
                            <button id="edit-btn" type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Submit
                            </button>
                        </Link>
                        {/* Delete button deletes the selected listing */}
                        <Link href="/listing/[listing]">
                            <button id="delete-btn" type="button" className="ml-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
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
            <Footer />
        </div>
    )
}