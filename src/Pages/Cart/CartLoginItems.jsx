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
          <div>{`My Cart : (${cart.length})`}</div>
          <div></div>
        </div>
        <div className="cart1">
          <div>
            <div className="basket">
              <div>
                <div>
                  Groceries Basket <span>({cart.length} items)</span>
                </div>
                <div>₹ {(price*0.8).toFixed(2)}</div>
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
            <Applycoupon />
            <PaymentDetils cartPrice={price} />
            <div className="PaymentButton">
              <button
                onClick={() => {
                  navigate("/address");
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
