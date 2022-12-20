import React, { useState } from "react";
import { useToast, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../Cart/PymentPage.css";
export const PaymentPage = () => {
  let [checked, setChecked] = useState(false);
  const toast = useToast();
  let navigate = useNavigate();
  return (
    <>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <div className="container">
        <div>
          <div
            onClick={() => {
              navigate("/address");
            }}
          >{`< Go Back`}</div>
          <div>
            <div>Total Amount</div>
            <div>{localStorage.getItem("price")}</div>
          </div>
        </div>
        <div>
          <div>
            <div className="disabled">UPI</div>
            <div className="disabled">CREDIT / DEBIT / ATM CARD</div>
            <div className="disabled">NETBANKING</div>
            <div className="disabled">WALLETS</div>
            <div>CASH ON DELIVERY</div>
          </div>
          <div>
            <div>Pay using Cash on Delivery</div>
            <div className="Ajaya">
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
                // alert("Purchage Successful")
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
              Pay 3140
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
