import React from 'react'

export default function CartItem(props:any) {
    const {element, index, onDelete} = props;
    console.log(element);   
    // element.userId

    async function contactseller() {
        const userinfo = await fetch(`http://localhost:8000/auth/getone/${element.listing.userId}`, {
            method: 'GET',  
            headers: {
            'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        const data = await userinfo.json();
        alert(`Contact Seller via Email: ${data.email}`);
    }
    async function removeitem() {
        const remove = await fetch(`http://localhost:8000/cart/remove/${element.id}`, {
            method: 'POST',  
            headers: {
            'Content-Type': 'application/json'
            },
        })
        if(remove.status === 200) {
            alert('Item removed');
            onDelete();
        } else {
            alert('Item remove failed');
        }
    }

    return (
      <div className='w-10/12 flex flex justify-between my-4 py-4 border-2' key={index}>
          <div className='w-1/3'>
              <img className='object-scale-down width-full p-4' src={element.listing.image} alt={element.listing.name}></img>
          </div>
  
          <div className='w-1/3 py-12'>
              <h5 className='font-bold hover:underline'>{element.listing.name} {element.listing.status === "active" ? null : "- Sold"}</h5>
              <p className=''>{element.listing.description}</p>
              <br />
              <p>Price: ${element.listing.price}</p>
          </div>
  
          <div className='w-1/3 flex flex-col justify-center items-center gap-2'>
              <button onClick={contactseller} className='border-1 border-gray-300 static w-2/3 rounded-xl border bg-gray-200 p-4 hover:bg-gray-300'>Contact Seller</button>
              <button onClick={removeitem} className='border-1 border-gray-300 static w-2/3 rounded-xl border bg-gray-200 p-4 hover:bg-gray-300'>Remove Item</button>
          </div>
  
      </div>
    )
}
