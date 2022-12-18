import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import "../Cart/PymentPage.css"
export const PaymentPage = () => {
    let [checked,setChecked]=useState(false)
    let navigate=useNavigate()
    return (
        <>
            <div className='Payment'>
                <div>
                    <div>
                        <img src="https://myjio-rl-prod.jioconnect.com/jiopay-pgapp/images/logo_Jio_blue.svg" alt="" />
                        Payments
                    </div>
                    <div>
                        <img src="https://myjio-rl-prod.jioconnect.com/jiopay-pgapp/images/ic_100_secured.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div>
                    <div>{`< Go Back`}</div>
                    <div>
                        <div>
                            Total Amount
                        </div>
                        <div>
                        ₹3140
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='disabled'>
                        UPI
                        </div>
                        <div className='disabled'>
                        CREDIT / DEBIT / ATM CARD
                        </div>
                        <div className='disabled'>
                        NETBANKING
                        </div>
                        <div className='disabled'>
                        WALLETS
                        </div>
                        <div>
                        CASH ON DELIVERY
                        </div>
                    </div>
                    <div>
                        <div>
                        Pay using Cash on Delivery
                        </div>
                        <div>
                            <input onChange={()=>{
                                setChecked(true)
                            }} type="radio" />    
                          Cash On Delivery
                        </div>
                        <button disabled={!checked} onClick={(e)=>{
                            alert("Purchage Successful")
                            navigate('/')
                        }} className={`${(checked===true)?"blue":""}`}>
                          Pay 3140 
                        </button>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
