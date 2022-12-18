import React, { useEffect, useState } from 'react'
import "../Cart/CartLoginItems.css"
import { CartItem } from '../../Component/Cart/CartItem'
import { Applycoupon } from '../../Component/Cart/Applycoupon'
import { PaymentDetils } from '../../Component/Cart/PaymentDetils'
import {CartLogin} from  "./CartLogin"
import axios from 'axios'
import { useNavigate } from 'react-router'
export const CartLoginItems = () => {
    let navigate=useNavigate()
    let [cart,setCart]=useState([])
    useEffect(()=>{
        axios.get("https://kiwi-discovered-pyjama.glitch.me/cart").then((r)=>{
            setCart(r.data);
        })
    })
  return (cart.length===0)?<CartLogin/>:(
    <div className='CartLoginitems' >
        <div>
            <div>
                <div>{`My Cart (1)`}</div>
                <div></div>
            </div>
            <div>
                <div>
                    <div className='basket'>
                        <div>
                            <div>Groceries Basket <span>(1 items)</span></div>
                            <div>₹129.00</div>
                        </div>
                        <div>
                           {cart.length&&cart.map((el)=>{
                                return  <CartItem key={el.id} {...el}/>
                            })}
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <Applycoupon/>
                    <PaymentDetils/>
                    <div className='PaymentButton'><button onClick={()=>{
                        // need to update
                        navigate("/")
                    }}>Place Order</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}
