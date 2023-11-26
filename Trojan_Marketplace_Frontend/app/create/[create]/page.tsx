import Link from 'next/link'


export default function CreateListing() {

    return (
        <main className='flex flex-col min-h-screen flex items-center justify-start p-16'>
            
            {/* To be edited: header */}
            <div className="z-10 max-w-5xl w-full items-center justify-between font-serif text-sm lg:flex mb-4">
                <p className="fixed left-0 top-0 flex w-full justify-center   lg:static lg:w-auto   text-xl font-serif font-bold">
                <Link href="../..">
                TROJAN MARKETPLACE&nbsp;
                </Link>
                </p>
                <div className=' space-x-16 '>
                    <button className='text-base font-serif font-bold'>Search Item&nbsp;</button>
                   
                    <button className='text-base font-serif font-bold'>Cart&nbsp;</button>

                    <Link href="/listing/[listing]">
                    <button className='text-base font-serif font-bold'>Listings&nbsp;</button>
                    </Link>
                    <button className='text-base font-serif font-bold'>Log Out&nbsp;</button>
                </div>
            </div>
            {/* To be edited: header */}


            <div className='w-10/12 h-full bg-[#f1f1f1]'>
            <form className="text-center p-8 border rounded-lg shadow-lg">
                {/*  2 lines - tailwind components for input box style https://v1.tailwindcss.com/components/forms */}
                {/* <h1 className="text-2xl font-bold mb-6">Create Listing</h1> */}
                <fieldset className="text-left mb-6">
                    <legend className="text-lg font-semibold mb-4">Create Listing</legend>
                    <div className="flex items-start mb-4">

                        <label htmlFor="item_name" className="main-label font-bold w-3/12 text-right mb-2">Item:</label>
                        <input id="item_name" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" placeholder="Item Name" required/>
                    </div>
                    <div className="flex items-start mb-4">
                        <label htmlFor="item_price" className="main-label font-bold w-3/12 text-right mb-2">Price:</label>
                        <input id="item_price" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="number" step="0.01" placeholder="Price" required/>
                    </div>
                    <div className="flex items-start mb-4">
                        <label htmlFor="item_image" className="main-label font-bold w-3/12 text-right mb-2">Image URL:</label>
                        <input id="item_image" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12 py-1.5" type="text" placeholder="Enter url for image"/>
                    </div>
                    <div className="flex items-start mb-4">
                        <label htmlFor="item_description" className="main-label font-bold w-3/12 text-right mb-2">Item Description:</label>
                        <textarea id="item_description" className="pl-2 ml-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block w-8/12" placeholder="Add description"></textarea>
                    </div>
                </fieldset>
                <div className="flex justify-between">

                {/* Submit button will create a new listing */}
                <Link href="/listing/[listing]">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Submit
                    </button>
                </Link>
                <Link href="/listing/[listing]">
                    <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                        Cancel
                    </button>
                </Link>
                </div>
            </form>
            </div>
        </main>
    )
}