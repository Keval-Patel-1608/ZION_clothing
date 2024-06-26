import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss'

import { ReactComponent as EmptyCartIcon} from '../../assets/trolley.svg';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            </div>

            {cartItems.length ? (      
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} /> 
                 ))
            ) : (
                <div className='empty-message'>
                    <span>Your cart is empty</span>
                    <EmptyCartIcon className='empty-cart'></EmptyCartIcon>
                    <hr className='hr-width'/>
                </div>
                )
            }            
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
    )
}

export default Checkout;