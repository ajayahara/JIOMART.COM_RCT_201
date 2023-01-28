import React, { useState } from 'react'
import "../Cart/Applycoupon.css"
export const Applycoupon = ({cartPrice}) => {
    const [coupon,setCoupon]=useState("")
    const handleDiscount=()=>{
      if(coupon=="Masai30")
      {
        let x=(cartPrice*10)/100
        console.log(cartPrice)
      }
    }
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
                <input type="text" onChange={(e)=>setCoupon(e.target.value)} placeholder='Enter Coupon Code'/>
                <button onClick={handleDiscount}>Apply</button>
                </div>
            </div>
            <hr />
        </div>
    )
}
