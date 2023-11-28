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
    return data;
}

export default function Cart() {
    // const [items, setItems] = useState( [
    //     {
    //         "userID": 1,
    //         "itemID": 1,
    //         // no transaction ID needed
    //         "name": "Trojan Mug",
    //         "image": "https://www.uscbookstore.com/SSP%20Applications/USC%20-%20SCA%20Vinson/product-images/1962143_main-1.jpg", // add an alt when using actual API data
    //         "description": "Super cool mug. Fight on!",
    //         "status": true, // true=available? can also remove this
    //         "sellerID": 3, 
    //         // seller's name/contact can also be retrieved later, whatever's easier
    //             // i.e. fetch buyer’s info and sellerID, then separately call for sellerID to use for "Contact Seller" button
    //         "sellerFname": "Tommy",
    //         "sellerLname": "Trojan",
    //         "sellerUsername": "tommytrojan@usc.edu",
    //         "price": 100
    //     },
    //     {
    //         "userID": 1,
    //         "itemID": 2, 
    //         "name": "Swivel Chair",
    //         "image": "https://www.ikea.com/us/en/images/products/millberget-swivel-chair-murum-black__1020142_pe831799_s5.jpg?f=s",
    //         "description": "A swivel chair from Ikea, already assembled and almost new. Willing to meet in-person at USC Village for exchange",
    //         "status": true, // true=available?
    //         "sellerID": 2, 
    //         // seller name + contact info (email; same as username)
    //         "sellerFname": "Test",
    //         "sellerLname": "Seller2",
    //         "sellerUsername": "testSeller2@usc.edu",
    //         "price": 100
    //     },
    //     {
    //         "userID": 1,
    //         "itemID": 3,
    //         "name": "Algorithm Design Textbook",
    //         "image": "https://images-na.ssl-images-amazon.com/images/I/81onzAm2kgL._AC_UL210_SR210,210_.jpg",
    //         "description": "Better than a swivel chair",
    //         "status": true, // true=available?
    //         "sellerID": 2, 
    //         // seller name + contact info (email; same as username)
    //         "sellerFname": "Test",
    //         "sellerLname": "Seller2",
    //         "sellerUsername": "testSeller2@usc.edu",
    //         "price": 100
    //     },
    //     {
    //         "userID": 1,
    //         "itemID": 4,
    //         "name": "Coffee Table",
    //         "image": "https://i5.walmartimages.com/seo/Bestier-Round-Coffee-Table-with-Storage-Living-Room-Tables-with-Sturdy-Metal-Legs-Retro-Grey-Oak_116ad883-3e6e-4208-97bb-acfb779e6287.640f48f2ef2a6eac55223ad14fdd6ad0.jpeg",
    //         "description": "Durable coffee table",
    //         "status": true, // true=available?
    //         "sellerID": 4, 
    //         // seller name + contact info (email; same as username)
    //         "sellerFname": "Test",
    //         "sellerLname": "Seller4",
    //         "sellerUsername": "testSeller4@usc.edu",
    //         "price": 100
    //     },
    //     {
    //         "userID": 1,
    //         "itemID": 5,
    //         "name": "Heater",
    //         "image": "https://m.media-amazon.com/images/I/81oqGEsMPGL._AC_UF894,1000_QL80_.jpg",
    //         "description": "Heater",
    //         "status": true, // true=available?
    //         "sellerID": 2, 
    //         // seller name + contact info (email; same as username)
    //         "sellerFname": "Test",
    //         "sellerLname": "Seller2",
    //         "sellerUsername": "testSeller2@usc.edu",
    //         "price": 100
    //     },
    //     {
    //         "userID": 1,
    //         "itemID": 6,
    //         "name": "BLIDVÄDER Table lamp, off-white ceramic/beige, 20\"",
    //         "image": "https://www.ikea.com/us/en/images/products/blidvaeder-table-lamp-off-white-ceramic-beige__1059592_pe849717_s5.jpg",
    //         "description": "Ikea lamp",
    //         "status": true, // true=available?
    //         "sellerID": 2, 
    //         // seller name + contact info (email; same as username)
    //         "sellerFname": "Test",
    //         "sellerLname": "Seller2",
    //         "sellerUsername": "testSeller2@usc.edu",
    //         "price": 100
    //     }
    // ]);

    const [items, setItems] = useState<ListItem[]>([])

    useEffect(() => {
        const api = async () => {
            const response = await getcart();
            // return response;
            setItems(response as unknown as ListItem[]);
        };
        api();

        return () => {
          // Cleanup if needed
        };
    }, []);

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
                        <CartItem element={element} index={index} />
                        ))}
                </div>
            </div>
            <Footer />
        </div>
      );

    
}