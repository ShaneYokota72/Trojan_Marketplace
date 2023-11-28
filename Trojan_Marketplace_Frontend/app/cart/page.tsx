import Link from 'next/link';
import MarketPlaceHeader from '../components/MarketPlaceHeader';
import Cart from '../components/Cart';

export default function CartPage() {
    return (
        <div className='flex flex-col w-full'>
            <MarketPlaceHeader />
            <Cart />   
        </div>
        
    )
}