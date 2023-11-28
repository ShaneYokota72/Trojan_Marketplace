import { useRouter } from 'next/navigation';
import React from 'react'

export default function Listing(props:any) {
    const router = useRouter();
    const {element, index, onDelete} = props;

    async function handledelete() {
        const res = await fetch(`http://localhost:8000/listing/remove/${element.id}`, {
          method: 'POST',  
          headers: {
            'Content-Type': 'application/json'
          },
        })
        // const data = await res.json();
        if(res.status === 200) {
            alert('Successfully deleted listing');
            onDelete();
        } else {
            alert('Unsuccessful delete listing. Please Try Again');
        }
    }

  return (
    <div className='w-10/12 flex flex justify-between my-4 py-4 border-2' key={index}>
        <div className='w-1/3'>
            <img className='object-scale-down w-auto h-full p-4' src={element.image} alt={element.name}></img>
        </div>

        <div className='w-1/3 py-12'>
            <h5 className='font-bold hover:underline'>{element.name} {element.status === "active" ? null : "- Sold"}</h5>
            <p className=''>{element.description}</p>
            <br />
            <p>Price: ${element.price}</p>
        </div>

        <div className='w-1/3 flex flex-col justify-center items-center gap-2'>
            <button onClick={() => {router.push(`/product/${element.id}`)}} /* id here is teh listing id. QUery the userId once on product page */className='border-1 border-gray-300 static w-2/3 rounded-xl border bg-gray-200 p-4 hover:bg-gray-300'>View Listing</button>
            <button onClick={() => {router.push(`/editlisting/${element.id}`)}}className='border-1 border-gray-300 static w-2/3 rounded-xl border bg-gray-200 p-4 hover:bg-gray-300' >Edit Listing</button>
            <button onClick={handledelete} className='border-1 border-gray-300 static w-2/3 rounded-xl border bg-gray-200 p-4 hover:bg-gray-300'>Mark as Sold</button>
            <button onClick={handledelete} className='border-1 border-gray-300 static w-2/3 rounded-xl border bg-gray-200 p-4 hover:bg-gray-300'>Remove Listing</button>
        </div>

    </div>
  )
}
