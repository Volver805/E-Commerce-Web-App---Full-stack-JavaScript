import React from 'react';
import Icon from '@iconify/react';
import cartIcon from '@iconify/icons-ic/outline-shopping-cart';
import accountIcon from '@iconify/icons-ic/round-account-circle';
import Logo from './shopping-bag.svg';

import './Navbar.scss';

const Navbar = ()=> {
    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <img src={Logo} alt=''/>
                    Shoprenger
                </div>
                <div className='nav'>
                    <span>HOME</span>
                    <span id='nav-button-shop'>SHOP</span>
                    <span>ABOUT</span>

                </div>
                <div className='buttons'>
                    <Icon icon={accountIcon}/>
                    <Icon icon={cartIcon} />
                </div>
            </div>            
        </nav>
    )
}

export default Navbar;