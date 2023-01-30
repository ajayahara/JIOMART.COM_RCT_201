import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartLoginItems } from "../Pages/Cart/CartLoginItems";
import Home from "../Component/Home";
import IndivisualPage from "../Pages/IndivisualPage";
import LoginForm from "../Component/LoginForm";
import BevverageProducts from "../Pages/BevverageProducts";
import ElectronicProducts from "../Pages/ElectronicProducts";
import FruitsAndVegetables from "../Pages/FruitsAndVegetables";
import RegisterForm from "../Component/RegisterForm";
import { Address } from "../Pages/Cart/Address";
import { PaymentPage } from "../Pages/Cart/PaymentPage";
import Admin from "../Pages/Admin";
import Adminpanel from "../Pages/AdminPanel";
import AccountPage from "../Pages/Cart/UserAccount";
import ProtectedRoute from "../secured/ProtectedRoute";
import Not from "../Resources/404.gif"
import { Image } from "@chakra-ui/react";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/beverages" element={<BevverageProducts />} />
        <Route path="/electronicProducts" element={<ElectronicProducts />} />
        <Route path="/indivisualPage" element={<IndivisualPage />} />
        <Route path="/fruitsAndVegetables" element={<FruitsAndVegetables />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartLoginItems />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminPanel" element={<Adminpanel />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Image  src={Not}></Image>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
