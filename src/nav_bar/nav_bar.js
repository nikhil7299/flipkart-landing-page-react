
import React from 'react';
import './nav_bar.css';

export function NavBar() {
    return <nav>
        <div className='logo' >
            <img alt='Flipkart' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' width={75} height={20} />
            <p>
                Explore
                <span className='plus'>Plus</span>
                <img alt='Plus' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' width={10} height={10} />
            </p>
        </div>
        <div className='search'>
            <input type="text" placeholder="Seaarch for products, brands and more" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <button className='loginBtn'>Login</button>
        <div className='links'>

            <a href='#'>Become a Seller</a>

            <a href='#'>More <i className="fa-solid fa-angle-down"></i>
            </a>

            <a href='#'><i className="fa-solid fa-cart-shopping"></i> Cart</a>
        </div>
    </nav>

}

