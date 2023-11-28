"use client"
import MarketPlaceHeader from '@/app/components/MarketPlaceHeader';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

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

export default function page() {
    const router = useRouter();
    const params = useParams();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image , setImage] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        const api = async () => {
            const response = await fetch(`http://localhost:8000/listing/getitem/${params.editlisting}`, {
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
        }
        api();
    },[])

    async function handlesumbit() {
        console.log(name, description, image, price);
        const uid = await getcookie();
        const res = await fetch(`http://localhost:8000/listing/edit/${params.editlisting}`, {
            method: 'POST',  
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: uid,
                name: name,
                description: description,
                image: image,
                price: Number(price),
            })
        })
        if(res.status === 200) {
            console.log('successful listing edit');
            router.push('/marketplaceuser');
        } else {
            console.log('unsuccessful listing edit');
            alert('Unsuccessful listing edit. Please Try Again');
        }
    }

    /* 
    input IDs: item_name, item_price, item_image, item_description
    Will add new listing to the database with userID, itemID, and status
    */
    return (
        <div className='flex flex-col w-full'>
            <MarketPlaceHeader />
            <main className='flex flex-col min-h-screen flex items-center justify-start p-16'>
                <div className='w-10/12 h-full bg-[#f1f1f1]'>
                <div className="text-center p-8 border rounded-lg shadow-lg">
                    {/*  2 lines - tailwind components for input box style https://v1.tailwindcss.com/components/forms */}
                    {/* <h1 className="text-2xl font-bold mb-6">Create Listing</h1> */}
                    <fieldset className="text-left mb-6">
                        <legend className="text-lg font-semibold mb-4">Create Listing</legend>
                        <div className="flex items-start mb-4">

                            <label htmlFor="item_name" className="main-label font-bold w-3/12 text-right mb-2">Item:</label>
                            <input value={name} onChange={e => setName(e.target.value)} id="item_name" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" placeholder="Item Name" required/>
                        </div>
                        <div className="flex items-start mb-4">
                            <label htmlFor="item_price" className="main-label font-bold w-3/12 text-right mb-2">Price:</label>
                            <input value={price} onChange={e => setPrice(e.target.value)} id="item_price" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="number" step="0.01" placeholder="Price" required/>
                        </div>
                        <div className="flex items-start mb-4">
                            <label htmlFor="item_image" className="main-label font-bold w-3/12 text-right mb-2">Image URL:</label>
                            <input value={image} onChange={e => setImage(e.target.value)} id="item_image" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" placeholder="Enter url for image"/>
                        </div>
                        <div className="flex items-start mb-4">
                            <label htmlFor="item_description" className="main-label font-bold w-3/12 text-right mb-2">Item Description:</label>
                            <textarea value={description} onChange={e => setDescription(e.target.value)} id="item_description" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12" placeholder="Add description"></textarea>
                        </div>
                    </fieldset>
                    <div className="flex justify-between">

                    {/* Submit button will create a new listing */}
                    {/* <Link href="/listing/1"> */}
                        <button onClick={handlesumbit} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Submit
                        </button>
                    {/* </Link>
                    <Link href="/listing/1"> */}
                        <button type="button" onClick={() => {router.push("/marketplaceuser")}} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                            Cancel
                        </button>
                    {/* </Link> */}
                    </div>
                </div>
                </div>
            </main>
        </div>
    )
}
