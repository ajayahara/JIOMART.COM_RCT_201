import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import "../Cart/AddSubstract.css";

export const AddSubstact = ({ quantity, id }) => {
  return (
    <div className="AddSubstact">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          colorScheme="blue"
        
        >
          -
        </Button>
        <Text style={{ margin: "1rem" }}>{quantity}</Text>
        <Button colorScheme="blue">
          +
        </Button>
      </Box>
    </div>
  );
};
