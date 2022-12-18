import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { CartItem } from '../Component/Cart/CartItem'
import Home from '../Component/Home'
import IndivisualPage from '../Pages/IndivisualPage'
import Login from '../Pages/login'
import BevverageProducts from '../Pages/BevverageProducts'
import ElectronicProducts from '../Pages/ElectronicProducts'
import FruitsAndVegetables from '../Pages/FruitsAndVegetables'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/beverages' element={<BevverageProducts />}/>
            <Route path='/electronicProducts' element={<ElectronicProducts />}/>
            <Route path='/electronicProducts' element={<ElectronicProducts />}/>
            <Route path='/indivisualPage' element={<IndivisualPage />}/>
            <Route path='/fruitsAndVegetables' element={<FruitsAndVegetables />}/>
            <Route path='/cart' element={<CartItem />}/>
            <Route path='*' element={<h1>*Error* Page Not Found</h1>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes