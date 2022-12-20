import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../Cart/CartItem.css";
import { AddSubstact } from "./AddSubstact";
export const CartItem = ({ image, name, price ,id}) => {
  const [quantity, setQuantity] = useState(1);
  const handleAdd = (val) => {
    setQuantity((prev) => prev + val);
  };

  const handleReduce = (val) => {
    setQuantity((prev) => prev - val);
  };
  return (
    <div className="CartItem">
      <div>
        <div>
          <img src={image} alt="image1" />
        </div>
      </div>
      <div>
        <div>{name}</div>
        <div>
          <span>₹ {(price * 0.8 * quantity).toFixed(2)}</span>
          <span> ₹ {price}</span>
          <span>You Save ₹  {price * 0.2}</span>
        </div>
        <div>
          <span>Sold By </span>
          <span>Reliance Retail</span>
        </div>
        <div>
          <div>SAVE FOR LATER</div>

          <AddSubstact
            handleAdd={handleAdd}
            quantity={quantity}
            handleReduce={handleReduce}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};
