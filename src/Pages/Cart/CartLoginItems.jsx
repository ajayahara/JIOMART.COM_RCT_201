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
    let [cartPrice,setCartPrice]=useState(0);
    useEffect(()=>{
        axios.get("https://kiwi-discovered-pyjama.glitch.me/cart").then((r)=>{
            setCart(r.data);
        })
    },[])
    useEffect(()=>{
    let x=cart.reduce((total,el)=>{
        return total+el.price;
    },0)
     setCartPrice(x)
    },[cart])
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
                            <div>Groceries Basket <span>({cart.length} items)</span></div>
                            <div>{Math.ceil(cartPrice*0.8)}</div>
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
                    <PaymentDetils cartPrice={cartPrice}/>
                    <div className='PaymentButton'><button onClick={()=>{
                        // need to update
                        navigate("/address")
                    }}>Place Order</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}
