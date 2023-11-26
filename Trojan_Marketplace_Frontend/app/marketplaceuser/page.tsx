import React from 'react'
import Item from '../components/item'
import MarketPlaceHeader from '../components/MarketPlaceHeader'
import MarketPlaceHeaderGuest from '../components/MarketPlaceHeaderGuest'

const page = () => {
  // api call 
  const data  = [
    {
      name: 'Shoes',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: 'https://images.unsplash.com/photo-1612836674517-0f7f0b7d6a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzaG9vdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      alt: 'picture of shoes'
    },
    {
      name: 'skateboard',
      description: ' Sam swiftly skates on a sleek skateboard, skillfully spinning through the city streets.',
      image: 'https://images.unsplash.com/photo-1612836674517-0f7f0b7d6a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzaG9vdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      alt: 'picture of skateboard'
    },
    {
      name: 'Cookie',
      description: 'Craving crunchy cookies, Carla cheerfully chewed.',
      image: 'https://images.unsplash.com/photo-1612836674517-0f7f0b7d6a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzaG9vdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      alt: 'picture of Cookie'
    },
    {
      name: 'Notebook',
      description: 'Naomis nimble fingers neatly noted in her notebook.',
      image: 'https://images.unsplash.com/photo-1612836674517-0f7f0b7d6a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzaG9vdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      alt: 'picture of Notebook'
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
        </div>
    </div>
   
  )
}

export default page