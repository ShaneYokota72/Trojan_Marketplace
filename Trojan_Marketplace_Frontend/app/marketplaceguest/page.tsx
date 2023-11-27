"use client"
import React,{useEffect, useState} from 'react'
import Item from '../components/item'
import MarketPlaceHeader from '../components/MarketPlaceHeader'
import MarketPlaceHeaderGuest from '../components/MarketPlaceHeaderGuest'
import { useRouter } from 'next/navigation'

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

const page = () => {
  const router = useRouter();
  const [redirect, setredirect] = useState(false)
  
  const data  = [
    {
      name: 'Shoes',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: 'https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg',
      alt: 'picture of shoes'
    },
    {
      name: 'skateboard',
      description: ' Sam swiftly skates on a sleek skateboard, skillfully spinning through the city streets.',
      image: 'https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg',
      alt: 'picture of skateboard'
    },
    {
      name: 'Cookie',
      description: 'Craving crunchy cookies, Carla cheerfully chewed.',
      image: 'https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg',
      alt: 'picture of Cookie'
    },
    {
      name: 'Notebook',
      description: 'Naomis nimble fingers neatly noted in her notebook.',
      image: 'https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg',
      alt: 'picture of Notebook'
    },
  ]

  useEffect(() => {
    const api = async () => {
      const response = await getcookie();
      if (response !== 0) {
        setredirect(true);
      }
    }
    api();
  },[])

  if(redirect){
    router.push('/marketplaceuser')
  }

  return (
    <div>
      <MarketPlaceHeaderGuest />
        {/* //different header use a layout file
        //implement navbar using daisyUi framework */}
        <div className='flex flex-wrap justify-stretch w-screen'>
          {
            data.map((item) => (
              <Item key={item.name} name={item.name} description={item.description} image={item.image} />
            ))
          }
        </div>
    </div>
   
  )
}

export default page