import React from 'react'
import "../Cart/PaymentDetails.css"
export const PaymentDetils = () => {
    return (
        <div className='Payment'>
            <div>
                Payment Details
            </div>
            <div className='payee'>
                <div>MRP</div>
                <div>200</div>
            </div>
            <hr />
            <div className='payee'>
                <div>Product Discount</div>
                <div>-71</div>
            </div>
            <hr />
            <div className='payee last'>
                <div>Total Amount</div>
                <div>129</div>
            </div>
            <div className='green'>
                You will save 71
            </div>
        </div>
    )
}
