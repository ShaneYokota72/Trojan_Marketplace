'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {useState, useEffect} from 'react'
const MarketPlaceHeader = () => {
  const router = useRouter();

  const [search, setSearch] = useState('')


  const handlelogout = async () => {
    const res = await fetch('http://localhost:8000/auth/logout', {
      method: 'POST',  
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (res.status === 200) {
      // successful sign up
      console.log('successful logout');
      router.push('/')
    } else {
      // unsuccessful sign up
      console.log('unsuccessful logout');
      alert('Unsuccessful logout. Please Try Again');
    }
  }

  
  return (
    <div className='text-accent  font-serif bg-white h-40 border-2'>
      <div className = "ml-4 mt-8 text-2xl w-96 float-left">
        <Link href = "/" className='hover:text-red-900 font-medium'>TROJAN MARKETPLACE</Link>
      </div>
      <div className = "w-[30rem] h-32 mr-16 mt-8 float-right flex flex-row justify-between ">
        
            <div className="join -ml-[33rem] -mt-2">
                    <div>
                        <div>
                            <input className="input input-bordered !outline-none join-item w-[25rem]" placeholder="Search" value ={search} onChange={e => setSearch(e.target.value)}/>
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item text-accent font-thin text-base">Search</button>
                    </div>
            </div>
            {/* <div>
                <Link href = "/" className='hover:text-red-900 float-none text-base'>Search Item</Link>
            </div> */
              // note about cart link: need to route dynamically w/ userID
            }
            <div>
                <Link href = "/cart/1" className='hover:text-red-900 float-none text-base'>Cart</Link>
            </div>
            <div>
                <Link href = "/listing" className='hover:text-red-900 float-none text-base'>Listings</Link>
                <Link href = "/listing/1" className='hover:text-red-900 float-none text-base'>Listings</Link>
            </div>
            <div>
                {/* <Link href = "/" className='hover:text-red-900 float-none text-base'>Logout</Link> */}
                <button onClick={handlelogout} className='hover:text-red-900 float-none text-base'>Logout</button>
                <Link href = "/" className='hover:text-red-900 float-none text-base'>Logout</Link>
            </div>
      </div>
    </div>
  )
}
export default MarketPlaceHeader
