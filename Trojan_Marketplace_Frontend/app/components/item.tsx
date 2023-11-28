import { useRouter } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react'

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

async function addtocart(lid: number) {
  const uid = await getcookie();
  const res = await fetch(`http://localhost:8000/cart/add`, {
    method: 'POST',  
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: uid,
      listingId: lid,
    })
  })
  return res.status;
}

export default function item( props :any ) {
  const router = useRouter();
  const {name, description, image} = props

  // write api for handleaddtocart
  async function handleaddtocart() {
    const uid = await getcookie();
    if(uid === 0) {
      router.push("/login")
      return;
    }
    const response = await addtocart(props.id);
    if(response === 201) {
      alert('Successfully added to cart');
    } else {
      alert('Unsuccessful add to cart. Please Try Again');
    }
  }

  return (
    <div className="card w-72 bg-base-100 border-rounded border-2 shadow-xl m-4" key={props.id}>
        <figure className='mt-4'><img src={image} alt={name} width={100} height={100} className='!h-40 w-auto'/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button onClick={handleaddtocart} className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
