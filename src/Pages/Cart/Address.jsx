import React, { useEffect, useState } from 'react'
import { AddressItem } from '../../Component/Cart/AddressItem'
import { DeliveryAddress } from '../../Component/Cart/DeliveryAddress'
import {AddAddress} from "../../Component/Cart/AddAddress"
import { NoAddress } from '../../Component/Cart/NoAddress'
import { PaymentDetils } from '../../Component/Cart/PaymentDetils'
import "../Cart/Address.css"
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
export const Address = () => {
  let [active,setActive]=useState(false)
  let navigate=useNavigate()
  let [ad,setAdd]=useState(null);
  let [ad1,setAd1]=useState({
    a:"",
    b:"",
    c:"",
    d:"",
    e:"",
    f:"",
    g:"",
    h:"",
    i:"",
    j:""
  })
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
        
          {(ad==null)?  <NoAddress setActive={setActive} active={active}/>:<DeliveryAddress setActive={setActive} ad={ad}/>}
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
            localStorage.setItem("price",price)
              navigate('/payment')
          } }>Make Payment</button></div>
        </div>
      </div>
      <AddAddress active={active} setActive={setActive} onsubmit={onsubmit} onchange={onchange} />
    </div>
  )
}
