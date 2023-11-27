'use client'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
const MarketPlaceHeader = () => {

  const [search, setSearch] = useState('')


  
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
                <Link href = "/" className='hover:text-red-900 float-none text-base'>Listings</Link>
            </div>
            <div>
                <Link href = "/" className='hover:text-red-900 float-none text-base'>Logout</Link>
            </div>
      </div>
    </div>
  )
}

export default MarketPlaceHeader