import React from 'react'
import Item from '../components/item'
import MarketPlaceHeader from '../components/MarketPlaceHeader'

const page = () => {
  // api call 
  const data  = [
    {
      name: 'Shoes',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: 'https://images.unsplash.com/photo-1612836674517-0f7f0b7d6a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzaG9vdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      name: 'skateboard',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: 'https://images.unsplash.com/photo-1612836674517-0f7f0b7d6a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzaG9vdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      name: 'Cookie',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: 'https://images.unsplash.com/photo-1612836674517-0f7f0b7d6a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzaG9vdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      name: 'Notebook',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: 'https://images.unsplash.com/photo-1612836674517-0f7f0b7d6a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzaG9vdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
  ]

  return (
    <div>
      <MarketPlaceHeader />
        {/* //different header use a layout file
        //implement navbar using daisyUi framework */}
        <div className='flex flex-wrap justify-stretch w-screen'>
          {
            data.map((item) => (
              <Item name={item.name} description={item.description} image={item.image} />
            ))
          }
            {/* <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item /> */}
        </div>
    </div>
   
  )
}

export default page