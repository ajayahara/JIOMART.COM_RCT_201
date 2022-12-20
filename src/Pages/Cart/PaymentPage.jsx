import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../Cart/PymentPage.css";
export const PaymentPage = () => {
    let [checked,setChecked]=useState(false)
    let navigate=useNavigate()
    return (
        <>
            <div className='container'>
                <div>
                    <div onClick={()=>{
                        navigate('/address')
                    }}>{`< Go Back`}</div>
                    <div>
                        <div>
                            Total Amount
                        </div>
                        <div>
                        {localStorage.getItem("price")}
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
                        <div className='Ajaya'>
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
   