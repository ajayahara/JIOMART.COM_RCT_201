import React, { useState } from 'react'
import "../Cart/PaymentDetails.css"
import {ApplyCouponFn} from '../../redux/Cart/action'
import { useSelector } from 'react-redux'
export const PaymentDetils = ({cartPrice}) => {
    const coupon = useSelector((store)=> store.CartReducer.coupon)
    return (
        <div className='Payment'>
            <div>
                Payment Details
            </div>
            <div className='payee'>
                <div>MRP</div>
                <div>{cartPrice}</div>
            </div>
            <hr />
            <div className='payee'>
                <div>Product Discount</div>
                <div>-{coupon ? Math.floor(cartPrice*0.4) : Math.floor(cartPrice*0.2)}</div>
            </div>
            <hr />
            <div className='payee last'>
                <div>Total Amount</div>
                <div>{coupon ? cartPrice*0.6 : Math.floor(cartPrice*0.8)}</div>
            </div>
            <div className='green'>
                You will save {coupon ? "40% " : Math.floor(cartPrice*0.2)} 
            </div>
        </div>
    )
}
