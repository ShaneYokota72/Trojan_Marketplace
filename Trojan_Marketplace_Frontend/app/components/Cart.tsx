'use client';
import MarketPlaceHeader from "./MarketPlaceHeader";
import ContactSeller from "./ContactSeller";

import { useState } from "react";

/* Cart() parses array of items from API and displays them in table format.
* It also handles item removal ("Remove Item" button) 
* and contains the ContactSeller component ("Contact Seller" button + form)
* TODO? move form to another page instead
*/

export default function Cart() {
    // TODO: redirect user to their cart using their actual userID in URL routing
    // TODO: await/fetch cart data from API based on userID
    // TODO: link cart page to product page using itemID (see tableRows)

    // note: the state array below is being parsed into a map

    /* "array of items with state nextjs" prompt (1 line), Stack Overflow, 24 Nov 2023,
    * https://react.dev/learn/updating-arrays-in-state
    */
    const [cartItems, setItems] = useState( [
        {
            "userID": 1,
            "itemID": 1,
            // no transaction ID needed
            "name": "Trojan Mug",
            "image": "https://www.uscbookstore.com/SSP%20Applications/USC%20-%20SCA%20Vinson/product-images/1962143_main-1.jpg", // add an alt when using actual API data
            "description": "Super cool mug. Fight on!",
            "status": true, // true=available?
            "sellerID": 3, 
            // seller name + contact info (email; same as username)
            // seller's name/contact can also be retrieved later, whatever's easier
                    // i.e. fetch buyer’s info and sellerID, then separately call for sellerID to use for "Contact Seller" button
            "sellerFname": "Tommy",
            "sellerLname": "Trojan",
            "sellerUsername": "tommytrojan@usc.edu",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 2, 
            "name": "Swivel Chair",
            "image": "https://www.ikea.com/us/en/images/products/millberget-swivel-chair-murum-black__1020142_pe831799_s5.jpg?f=s",
            "description": "A swivel chair from Ikea, already assembled and almost new. Willing to meet in-person at USC Village for exchange",
            "status": true, // true=available?
            "sellerID": 2, 
            // seller name + contact info (email; same as username)
            "sellerFname": "Test",
            "sellerLname": "Seller2",
            "sellerUsername": "testSeller2@usc.edu",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 3,
            "name": "Algorithm Design Textbook",
            "image": "https://images-na.ssl-images-amazon.com/images/I/81onzAm2kgL._AC_UL210_SR210,210_.jpg",
            "description": "Better than a swivel chair",
            "status": true, // true=available?
            "sellerID": 2, 
            // seller name + contact info (email; same as username)
            "sellerFname": "Test",
            "sellerLname": "Seller2",
            "sellerUsername": "testSeller2@usc.edu",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 4,
            "name": "Coffee Table",
            "image": "https://i5.walmartimages.com/seo/Bestier-Round-Coffee-Table-with-Storage-Living-Room-Tables-with-Sturdy-Metal-Legs-Retro-Grey-Oak_116ad883-3e6e-4208-97bb-acfb779e6287.640f48f2ef2a6eac55223ad14fdd6ad0.jpeg",
            "description": "Durable coffee table",
            "status": true, // true=available?
            "sellerID": 4, 
            // seller name + contact info (email; same as username)
            "sellerFname": "Test",
            "sellerLname": "Seller4",
            "sellerUsername": "testSeller4@usc.edu",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 5,
            "name": "Heater",
            "image": "https://m.media-amazon.com/images/I/81oqGEsMPGL._AC_UF894,1000_QL80_.jpg",
            "description": "Heater",
            "status": true, // true=available?
            "sellerID": 2, 
            // seller name + contact info (email; same as username)
            "sellerFname": "Test",
            "sellerLname": "Seller2",
            "sellerUsername": "testSeller2@usc.edu",
            "price": 100
        },
        {
            "userID": 1,
            "itemID": 6,
            "name": "BLIDVÄDER Table lamp, off-white ceramic/beige, 20\"",
            "image": "https://www.ikea.com/us/en/images/products/blidvaeder-table-lamp-off-white-ceramic-beige__1059592_pe849717_s5.jpg",
            "description": "Ikea lamp",
            "status": true, // true=available?
            "sellerID": 2, 
            // seller name + contact info (email; same as username)
            "sellerFname": "Test",
            "sellerLname": "Seller2",
            "sellerUsername": "testSeller2@usc.edu",
            "price": 100
        }
    ]);

    async function removeItem(itemID : number) { // remove item from cart based on its ID
        // TODO: call API to remove item

        /* "nextjs delete item from state array" prompt (1 line), Stack Overflow, 24 Nov 2023,
        https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array 
        */
        setItems(prevItems => prevItems.filter(item => item.itemID !== itemID));
    }

    let cartCount = cartItems.length;
    // stores rows for all items 
    const tableRows = cartItems.map((element) => { 
        // right now seller info is assumed to be fetched w/ the item details
        // but we can also fetch seller info separately if that's easier


        // TODO: redirect to correct product page using itemID
        // put seller details in an object and pass it to another client-side function for the "contact seller" button
        let seller = {userID: element.sellerID, fname: element.sellerFname, lname: element.sellerLname, username: element.sellerUsername};
        return (
            <div className='table-row lg:text-lg sm:text-base border-collapse border border-slate-400 px-0 py-20'>
                <div className='table-cell pl-20 pr-8 py-10 items-center'>
                    <a href="/product">
                        <img className='object-scale-down h-52 w-52' src={element.image}></img>
                    </a>
                </div>
                <div className='table-cell pl-0 pr-8 py-10 align-top font-serif'>
                    <a href="/product" className='font-bold hover:underline'>
                        {element.name}
                    </a>
                    <br />
                    <text className=''>
                        {element.description}
                    </text>
                    <br />
                    <br />
                    Price: ${element.price}
                </div>
                <div className='table-cell pr-14 pt-10 pb-5 align-top font-serif text-sm text-right '>
                    <ContactSeller seller={seller} />
                    <br />
                    <button onClick={() => removeItem(element.itemID)} className='border-1 border-gray-300 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 hover:lg:bg-red-400'>Remove Item</button>
                </div>
            </div>
        );
    });

    // displays the cart page in table format
    return (
        <main className='flex min-h-screen flex-col items-center w-full '>
            
            <div className='w-10/12 h-full bg-[]'>
                <h1 className='lg:text-xl sm:text-lg font-serif font-bold text-left px-10 py-6 '>My Cart</h1>
                <div className='px-8'>
                    <div className='border-t-2 border-gray-500 border-opacity-50 '></div>
                </div>
            </div>

            <div className='table snap-center w-10/12 h-full bg-[]'>
                <div className='table-header-group '>
                    <div className='table-row font-serif lg:text-lg sm:text-base'>
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
        
      );

    
}