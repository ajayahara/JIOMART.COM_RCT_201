import React, {useEffect, useState } from "react";
import "../Cart/CartLoginItems.css";
import { CartItem } from "../../Component/Cart/CartItem";
import { Applycoupon } from "../../Component/Cart/Applycoupon";
import { PaymentDetils } from "../../Component/Cart/PaymentDetils";
import { CartLogin } from "./CartLogin";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export const CartLoginItems = () =>{
  let navigate = useNavigate();
  let [price,setPrice]=useState(0);
  let cart=useSelector((store)=>store.CartReducer.cart);
  let coupon=useSelector((store)=>store.CartReducer.coupon);

  
  useEffect(()=>{
   let x=0;
    for(let i=0;i<cart.length;i++){
      x=x+cart[i].price*cart[i].qty
    }
    setPrice(x);
  },[cart])


  return cart.length === 0 ? (
    <CartLogin />
  ) : (
    <div className="CartLoginitems">
      <div>
        <div>
          <div>{`My Cart : (${cart.length} Items)`}</div>
          <div></div>
        </div>
        <div className="cart1">
          <div>
            <div className="basket">
              <div>
                <div>
                  My Basket List<span>({cart.length} items)</span>
                </div>
                <div>₹ {price.toFixed(2)}</div>
              </div>
              <div>
                {cart.length &&
                  cart.map((el,i) => {
                    return (
                      <CartItem
                      key={i}
                      {...el}
                      />
                    );
                  })}
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div>
            <Applycoupon cartPrice={price} />
            <PaymentDetils cartPrice={price}   />
            <div className="PaymentButton">
              <button
                onClick={() => {
                  navigate("/address" , {state:price});
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
