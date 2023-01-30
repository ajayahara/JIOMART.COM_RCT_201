import React, { useState } from "react";
import { useToast, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../Cart/PymentPage.css";
import { useDispatch, useSelector } from "react-redux";
import { ResetCart } from "../../redux/Cart/action";
export const PaymentPage = () => {
  let [checked, setChecked] = useState(false);
  const toast = useToast();
  const coupon = useSelector((store)=>store.CartReducer.coupon)
  let navigate = useNavigate();
  const dispatch=useDispatch()
  return (
    <>
      <div className="container">
        <div className="container-div1">
          <div
            onClick={() => {
              navigate("/address");
            }}
          >{`< Go Back`}</div>
          <div>
            <div>Total Amount</div>
            <div>₹ {coupon ? Number(localStorage.getItem("price"))*0.5 : (Number(localStorage.getItem("price"))*0.8).toFixed(2)}</div>
          </div>
        </div>
        <div className="container-div2">
          <div className="container-div2-left">
            <div className="disabled">UPI</div>
            <div className="disabled">CREDIT / DEBIT / ATM CARD</div>
            <div className="disabled">NETBANKING</div>
            <div className="disabled">WALLETS</div>
            <div>CASH ON DELIVERY</div>
          </div>
          <div className="container-div2-right">
            <div>Pay using Cash on Delivery</div>
            <div>
              <input
                onChange={() => {
                  setChecked(true);
                }}
                type="radio"
              />
              Cash On Delivery
            </div>
            <button
              disabled={!checked}
              onClick={(e) => {
                dispatch(ResetCart())
                toast({
                  title: "Payments Successfull",
                  description: `"Thankyou for shopping. Please Visit us Again"`,
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                  position: "top",
                });
                navigate("/");
              }}
              className={`${checked === true ? "blue" : ""}`}
            >
            Pay ₹ {coupon ? (Number(localStorage.getItem("price"))*0.5).toFixed(2) : (Number(localStorage.getItem("price"))*0.8).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
