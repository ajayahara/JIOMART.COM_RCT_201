import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import "../Cart/AddSubstract.css";
import { useDispatch } from "react-redux";
import {AddCartitems, ReduceCartItems,DeleteFromCart} from "../../redux/Cart/action";
export const AddSubstact = ({quantity,image}) => {
  const dispatch=useDispatch();
  const handleReduce=()=>{
    dispatch(ReduceCartItems(image))
  }
  const handleAdd=()=>{
    dispatch(AddCartitems(image))
  }
  const handleDelete=()=>{
    dispatch(DeleteFromCart(image))
  }
  return (
    <div className="AddSubstact">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button colorScheme="blue" onClick={(quantity==1)?()=>{
          handleDelete()
        }:()=>{
          handleReduce()
        }} >
          -
        </Button>
        <Text style={{ margin: "1rem" }}>{quantity}</Text>
        <Button colorScheme="blue" onClick={()=>{
          handleAdd()
          }}>
          +
        </Button>
      </Box>
    </div>
  );
};
