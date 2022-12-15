import React from 'react'
import "../Cart/Applycoupon.css"
export const Applycoupon = () => {
    return (
        <div className='ApplyCoupon'>
            <div>
                <span>
                    Apply Coupon
                </span>
                <span>
                    VIEW ALL
                </span>
            </div>
            <div>
               <div> <img src="https://img.icons8.com/windows/512/discount.png" alt="offer icon" />
                <input type="text" placeholder='Enter Coupon Code'/>
                <span>Apply</span></div>
            </div>
            <hr />
        </div>
    )
}
