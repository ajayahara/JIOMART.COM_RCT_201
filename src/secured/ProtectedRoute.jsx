import { useToast } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const navigate = useNavigate();
  const toast = useToast();
  if (!isAuth) {
    toast({
      title: "Login First",
      description: "Login To Continue",
      status: "error",
      duration: 7000,
      isClosable: true,
      position: "top",
    });

    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
