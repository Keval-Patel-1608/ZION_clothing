import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { ReactComponent as EmptyCartIcon} from '../../assets/trolley.svg';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (      
          cartItems.map((item) => (        
            <CartItem key={item.id} cartItem={item} />      
          ))
          ) : (
            <div className='empty-message'>
              <span>Your cart is empty</span>
              <EmptyCartIcon className='empty-cart'></EmptyCartIcon>
            </div>
          )
        }        
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;