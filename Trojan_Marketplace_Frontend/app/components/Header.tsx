import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='text-accent  font-serif   bg-white h-40 border-2'>
      <div className = "ml-4 mt-8 text-2xl w-96 float-left">
        <Link href = "/" className='hover:text-red-900 font-medium'>TROJAN MARKETPLACE</Link>
      </div>
      <div className = "float-right mt-8 text-left w-52 ">
        <Link href = "/marketplaceguest" className='hover:text-gold text-red-900'>Search Item as a Guest</Link>
        <br></br>
        <Link href = "/login" className='hover:text-gold text-red-900'>Login</Link>
      </div>
    </div>
  )
}

export default Header