import Link from 'next/link';
import MarketPlaceHeader from '../../components/MarketPlaceHeader';
import Cart from '../../components/Cart';

export default function CartPage() {
    // TODO: center the cart w/ the header
    return (
        <div className=''>
            <div>
                <MarketPlaceHeader />
            </div>
            
            <div className=''>
                <Cart />
            </div>
                
        </div>
        
    )
}