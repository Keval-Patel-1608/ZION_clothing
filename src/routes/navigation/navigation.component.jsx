import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { ReactComponent as ZionLogo } from '../../assets/zion_logo.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils'; 

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // }

  return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                {/* <CrwnLogo className='logo' /> */}
                <ZionLogo className='logo' title='ZION Clothing' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                   SHOP
                </Link>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>
                      SIGN OUT
                    </span>
                  )
                  : 
                  ( <Link className='nav-link' to='/auth'>
                      SIGN IN
                    </Link>
                  )
                }
              <CartIcon />  
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;