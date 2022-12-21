import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import "../Cart/AddSubstract.css";
import axios from "axios";

const deleteFn = (id) => {
  axios.delete(`https://kiwi-discovered-pyjama.glitch.me/cart/${id}`);
};

// const getData =()=>{
//   return axios.get("https://kiwi-discovered-pyjama.glitch.me/cart")
// }
export const AddSubstact = ({ handleAdd, handleReduce, quantity, id }) => {
  const [value, setValue] = useState(1);
  const inc = () => {
    handleAdd(value);
  };

  const dec = () => {
    handleReduce(value);
  };

  // const handleGet =()=>{
  //   getData()
  // }
  const handleDelete = (id) => {
    deleteFn(id).then((res) =>
      // alert('item remove successfully')
      console.log(res)
    );
  };


  return (
    <div className="AddSubstact">
      {/* <span>
            <div></div>
            <div></div>
        </span>
        <span>1</span>
        <span><div></div></span> */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          colorScheme="blue"
          onClick={() => {
            if (quantity <2) {
              handleDelete(id);
            } else {
              dec();
            }
            // console.log('q',quantity)
          }}
        >
          -
        </Button>
        <Text style={{ margin: "1rem" }}>{quantity}</Text>
        <Button colorScheme="blue" onClick={() => inc()}>
          +
        </Button>
      </Box>
    </div>
  );
};
