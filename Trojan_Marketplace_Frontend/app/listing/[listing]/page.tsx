import React from 'react';
import Link from 'next/link';

interface ListItem {
    userID: number;
    itemID: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

export default function Listings() {
    
    let cartItems = [
        {
            // test data
            "userID": 1,
            "itemID": 1,
            "name": "Swivel Chair",
            "image": "/test1.jpeg",
            "description": "A swivel chair",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 2,
            "name": "Office Desk",
            "image": "/test2.png",
            "description": "Not a swivel chair",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 3,
            "name": "Book",
            "image": "/test3.jpg",
            "description": "Not a swivel chair Resize an element\'s content to stay contained",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 4,
            "name": "product 4",
            "image": "../../favicon.ico",
            "description": "Not a swivel chair These modifiers can even be stacked to target ",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 5,
            "name": "product 5",
            "image": "/vercel.svg",
            "description": "Not a swivel chair",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 6,
            "name": "product 6",
            "image": "/next.svg",
            "description": "Not a swivel chair",
            "price": 100
        }
    ]

    /* "nextjs display array of objects" prompt (9 lines), GeeksForGeeks, 19 Nov 2023,
        https://www.geeksforgeeks.org/how-to-render-an-array-of-objects-in-reactjs/
    */
    let cartCount = cartItems.length;
    const tableRows = cartItems.map((element, index) => { 
        return (
            <div key={index} className='table-row px-40 py-20 border border-transparent hover:border-gray-300 hover:bg-gray-100'>
                <div className='table-cell pl-20 pr-10 py-10 items-center'>
                    <img className='object-scale-down h-52 w-52' src={element.image} alt={element.name}></img>
                </div>
                <div className='table-cell pl-4 pr-10 py-10 align-top font-serif'>
                    <text className='font-bold hover:underline'>
                        {element.name}
                    </text>
                    <br />
                    <text className=''>
                        {element.description}
                    </text>
                    <br />
                    <br />
                    Price: ${element.price}
                </div>
                <div className='table-cell pr-14 py-10 align-top font-serif text-sm text-right flex flex-col justify-evenly'>
                    {/* Update to make: Link to Ana's detail listing page */}
                    <button className='border-1 border-gray-300 static w-auto rounded-xl border bg-gray-200 p-4 hover:bg-gray-300'>View Listing</button>
                    <br />
                    <br />
                    <br />
                    {/* 3 lines href Reference: Stack Overflow, "how to pass data from one page to another page in Next.js?" */}
                    <Link 
                    href={{ pathname: "/edit/[edit]", query: { userID: element.userID, itemID: element.itemID, name: element.name, image: element.image, description: element.description, price: element.price } }} >

                        <button className='border-1 border-gray-300 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 hover:lg:bg-gray-300'>Edit Listing</button>
                    </Link>

                </div>
            </div>
        );
    });


    // edited header from example code that loaded w/ the next.js project. cite if used in final proj
        // (3 lines - the tailwind components for main, div, p at the top are from the example code)
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-16'>
            
            {/* To be edited: header */}
            <div className="z-10 max-w-5xl w-full items-center justify-between font-serif text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center   lg:static lg:w-auto   text-xl font-serif font-bold">
                <Link href="/">
                TROJAN MARKETPLACE&nbsp;
                </Link>
                </p>
                <div className=' space-x-16 '>
                    <button className='text-base font-serif font-bold'>Search Item&nbsp;</button>
                   
                    <button className='text-base font-serif font-bold'>Cart&nbsp;</button>
                    
                    <Link href="/">
                        <button className='text-base font-serif font-bold'>Listings&nbsp;</button>
                    </Link>
                    <button className='text-base font-serif font-bold'>Log Out&nbsp;</button>
                </div>
            </div>
            {/* To be edited: header */}


            <br /><br />
            <div className='w-10/12 h-full bg-[#f1f1f1]'>
                <div className='flex items-center justify-between px-20 py-6'>
                    <h1 className='text-xl font-serif font-bold text-left'>My Listing</h1>
                    <Link href="/create/[create]">
                        <button className='border-1 border-gray-300 static w-auto rounded-xl border bg-gray-200 p-4 hover:bg-gray-300'>Add Listing</button>
                    </Link>
                </div>
                <div className='px-8'>
                    <div className='border-t-2 border-gray-500 '></div>
                </div>
            </div>

            <div className='table snap-center w-10/12 h-full bg-[#f1f1f1]'>
                <div className='table-header-group '>
                    <div className='table-row font-serif '>
                        <div className='table-cell px-20 py-6'>Item(s): {cartCount}</div>
                        <div className='table-cell px-20 py-6'></div>
                        <div className='table-cell text-right px-20 py-6'>Actions</div>
                    </div>
                </div>

                <div className='table-row-group'>
                    {tableRows}
                </div>
            </div>

        </main>
        
      )
}
