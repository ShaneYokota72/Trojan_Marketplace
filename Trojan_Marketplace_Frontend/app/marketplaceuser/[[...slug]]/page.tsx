"use client"
import React, { useEffect, useState } from 'react'
import Item from '../../components/item'
import MarketPlaceHeader from '../../components/MarketPlaceHeader'
import { useParams } from 'next/navigation'

interface Item {
  id: number;
  userId: number;
  name: string;
  image: string;
  description: String;
  status: String;
  price: number;
}

async function getitems() {
  const res = await fetch('http://localhost:8000/listing/getall', {
    method: 'GET',  
    headers: {
      'Content-Type': 'application/json'
    },
  })
 
  const data = await res.json();
  return data;
}

async function getsearchitems(search: string) {
  const res = await fetch(`http://localhost:8000/listing/getall/${search}`, {
    method: 'GET',  
    headers: {
      'Content-Type': 'application/json'
    },
  })
 
  const data = await res.json();
  return data;
}

const page = () => {
  const [data, setdata] = useState<Item[]>([])
  const params = useParams();

  if(params.slug !== undefined) {
    console.log(params.slug[0]);
  }

  useEffect(() => {
    const api = async () => {
      if(params.slug !== undefined) {
        const response = await getsearchitems(params.slug[0]);
        setdata(response);
      } else {
        const response = await getitems();
        // if (response !== null) {
          setdata(response);
        // }
      }
    }
    api();

    return () => {
      // Cleanup if needed
    };
  },[])

  return (
    <div>
        
        <MarketPlaceHeader />
        {/* //different header use a layout file
        //implement navbar using daisyUi framework */}
        <div className='flex flex-wrap justify-start w-full items-center px-40 pt-20'>
          {
            data.map((item) => (
              <Item name={item.name} description={item.description} image={item.image} id={item.id} />
            ))
          }
          {
            data.length === 0 ? <div className='text-2xl'>No items found</div> : null
          }
        </div>
    </div>
   
  )
}

export default page