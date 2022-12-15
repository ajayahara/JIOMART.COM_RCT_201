import React from 'react'
import { Route,Routes } from 'react-router-dom'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<div>Home</div>}/>
            <Route path='/login' element={<div>Home</div>}/>
            <Route path='/product' element={<div>Home</div>}/>
            <Route path='/product/:id' element={<div>Home</div>}/>
            <Route path='/cart' element={<div>Home</div>}/>
            <Route path='*' element={<div>Home</div>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes