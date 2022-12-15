import React from 'react'
import "../Cart/CartNoLogin.css"
export const CartNotLogin = () => {
    return (
        <div className="CartNoLogin" >
            <div>
                My Cart
            </div>
            <div>
                <img src="https://www.jiomart.com/msassets/images/emptycart.svg" alt="noCartImage" />
                <p>Your Cart is empty!</p>
            </div>
        </div>
    )
}
