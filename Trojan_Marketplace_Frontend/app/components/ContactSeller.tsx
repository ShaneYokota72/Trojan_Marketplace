'use client';
import { useState } from 'react';

type sellerProps = {
    userID: number;
    fname: string;
    lname: string;
    username: string;
}

/* function displays "Contact Seller" button
* onclick the button is hidden and a form is displayed
* // TODO: make the button redirect to a form on another page?
*/

// take a seller object as input so the form can display the seller's contact info
export default function ContactSeller({seller} : {seller : sellerProps}) {
    /* "nextjs onclick for button" prompt (3 lines), Next.js, 23 Nov 2023,
    * https://nextjs.org/learn-pages-router/foundations/from-javascript-to-react/adding-interactivity-with-state
    */
    const [form, setForm] = useState(false);

    function handleClick() {
        setForm(!form);
    }
 
    if (!form) { // button which displays the form onclick
        return (
            <div>
                <button onClick={handleClick} className='border-1 border-gray-300 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 hover:lg:bg-gray-300' >Contact Seller</button>
                <br />
            </div>
        )
        
    }
    else { // form which can be hidden. may need to move to different page
        return (
            <div className='text-center align-top'>
                <button onClick={handleClick} className='font-serif underline'>Hide Contact Information</button>
            
                <form className=' font-serif text-center border-1 border-1 lg:static lg:w-auto lg:rounded-xl lg: lg:border lg: lg:p-1 border-[#9D2235]'>
                    <label className=' font-semibold'>Seller Details:</label>
                    <br />
                    <label>{seller.fname} {seller.lname} </label>
                    <br />
                    <label>{seller.username} </label>
                    <br /> <br />
                    <label>Message to Seller: </label> <br />

                    <textarea className='text-gray-600 text-center rounded-md bg-white' placeholder="Send a message here">
                    </textarea>
                    <br />
                    <button type="submit" className='font-serif text-center rounded-md p-1 text-[#FFC72C] bg-[#9D2235]' >Submit</button>
                </form>
            </div>
            
        )
        
    }

    // backup method: popup window. can also make popup tab (check MDN javascript docs)
    /* "nextjs popup form on page" prompt (1 line), Stack Overflow, 23 Nov 2023,
        https://stackoverflow.com/questions/71573849/how-to-create-a-window-popup-using-nextjs
    */
    // export default function ContactSeller({seller} : {seller : sellerProps}) {
    //     function handleClick() {
    //         window.open('/contact-seller', 'Contact Seller', 'popup');
    //     }

    //     return (
    //         <button onClick={handleClick} className='border-1 border-gray-300 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 hover:lg:bg-gray-300'>Contact Seller</button>
    //     )
    // }

}

