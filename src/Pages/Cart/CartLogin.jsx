import React from 'react'
import { Link } from 'react-router-dom'
import "../Cart/CartLogin.css"
export const CartLogin = () => {
    return (
        <div className="CartLogin">
            <div>
                <div>
                    My Cart
                </div>
                <div>
                    <div>
                    <img src="https://www.jiomart.com/msassets/images/emptycart.svg" alt="noCartImage" />
                    <p>Your Cart is empty!</p>
                    <div>Check the items below or <span><Link to="/products"> continue shopping</Link> </span></div>
                    </div>
                </div>
                <div>
                    <h3>Products You Might Like</h3>
                    <h3>Top Deals</h3>
                </div>
            </div>
        </div>
    )
}
