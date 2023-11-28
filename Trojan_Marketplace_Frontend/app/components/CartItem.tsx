import React from 'react'

export default function CartItem(props:any) {
    const {element, index} = props;
    return (
      <div className='w-10/12 flex flex justify between' key={index}>
          <div className='w-1/3'>
              <img className='object-scale-down width-full p-4' src={element.image} alt={element.name}></img>
          </div>
  
          <div className='w-1/3 py-12'>
              <h5 className='font-bold hover:underline'>{element.name} {element.status === "active" ? null : "- Sold"}</h5>
              <p className=''>{element.description}</p>
              <br />
              <p>Price: ${element.price}</p>
          </div>
  
          <div className='w-1/3 flex flex-col justify-center items-center gap-2'>
              <button className='border-1 border-gray-300 static w-2/3 rounded-xl border bg-gray-200 p-4 hover:bg-gray-300'>Contact Seller</button>
              <button className='border-1 border-gray-300 static w-2/3 rounded-xl border bg-gray-200 p-4 hover:bg-gray-300'>Remove Item</button>
          </div>
  
      </div>
    )
}
