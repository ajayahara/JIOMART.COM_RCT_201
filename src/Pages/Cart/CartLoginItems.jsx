import React, { useEffect, useState } from "react";
import "../Cart/CartLoginItems.css";
import { CartItem } from "../../Component/Cart/CartItem";
import { Applycoupon } from "../../Component/Cart/Applycoupon";
import { PaymentDetils } from "../../Component/Cart/PaymentDetils";
import { CartLogin } from "./CartLogin";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
export const CartLoginItems = () => {
  let navigate = useNavigate();
  let [cartPrice, setCartPrice] = useState(0);
  console.log(store)
  let cart=useSelector((store)=>store.CartReducer.cart);
  return cart.length === 0 ? (
    <CartLogin />
  ) : (
    <div className="CartLoginitems">
      <div>
        <div>
          <div>{`My Cart : (${cart.length})`}</div>
          <div></div>
        </div>
        <div>
          <div>
            <div className="basket">
              <div>
                <div>
                  Groceries Basket <span>({cart.length} items)</span>
                </div>
                <div>₹ {(cartPrice * 0.8).toFixed(2)}</div>
              </div>
              <div>
                {cart.length &&
                  cart.map((el) => {
                    return (
                      <CartItem
                        q={0}
                        handleAdd={"ajaya"}
                        handleReduce={"ajaya"}
                        key={el.id}
                        id={el.id}
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
            <PaymentDetils cartPrice={cartPrice} />
            <div className="PaymentButton">
              <button
                onClick={() => {
                  // need to update
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
