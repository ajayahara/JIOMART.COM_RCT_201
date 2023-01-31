import React, { useEffect, useState } from 'react'
import { AddressItem } from '../../Component/Cart/AddressItem'
import { PaymentDetils } from '../../Component/Cart/PaymentDetils'
import "../Cart/Address.css"
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
export const Address = () => {
  let navigate=useNavigate()
 
  let [price,setPrice]=useState(0);
  let cart=useSelector((store)=>store.CartReducer.cart);
  useEffect(()=>{
   let x=0;
    for(let i=0;i<cart.length;i++){
      x=x+cart[i].price*cart[i].qty
    }
    setPrice(x);
  },[])
  return (
    <div className='Address'>
      <br />
      <div>
        <div>Order Summary</div>
        <div></div>
      </div>
      <div>
        <div>
          <div className='basket'>
            <div>
              <div>Groceries Basket <span>{`(${cart.length} items)`}</span></div>
              <div></div>
            </div>
            <div>
            {cart.length&&cart.map((el,i)=>{
               return  <AddressItem  key={i} {...el}/>
            })}
            </div>
          </div>
        </div>
        <div>
          <PaymentDetils cartPrice={price}/>
          <div className='PaymentButton'><button onClick={()=>{
            localStorage.setItem("price",price.toFixed(2))
              navigate('/payment')
          } }>Make Payment</button></div>
        </div>
      </div>
    </div>
  )
}
