import './cart-item.styles.scss';
// import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart } = useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className='cart-item-container'>
      
      <img src={imageUrl} alt={`${name}`} />
      <button className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </button>    
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;