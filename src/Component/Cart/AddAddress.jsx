import React, { useState } from 'react'
import "../Cart/AddAddress.css"

export const AddAddress = ({active,setActive}) => {
    return (
        <div className={`AddAddress ${active?"active":"inactive"}`}>
            <div>
                <div>
                    Add Address
                </div>
                <img src="https://img.icons8.com/material-sharp/512/multiply.png" alt="" onClick={()=>{
                    setActive(false)
                }} />
            </div>
          <div className='container'>
          <div className='Input-element global'>
                <div>
                    Address Details
                </div>
                <div>
                    <input placeholder='Pin Code' required />
                    <input placeholder='Flat/House No.'   required/>
                    <input placeholder='Floor No.' required />
                    <input placeholder='Tower No.'  required/>
                    <input placeholder='Bulding/Apartment Name'  required/>
                    <input placeholder='Address'  required/>
                    <input placeholder='Landmark/Area'  required/>
                    <input placeholder='City/State'  required/>
                </div>
            </div>
            <div className='contact-details global'>
                <div>
                    Contact Details
                </div>
                <div>
                    <input type="text" placeholder='Name'  required/>
                    <input type="number" placeholder='PhoneNo' required/>

                </div>
            </div>
            <div className='Save global'>
                <div>Save As</div>
                <div>
                    <button>Home</button>
                    <button>Work</button>
                    <button>Other</button>
                </div>
            </div>
          </div>
            <div className='Button global' >
                <button>Save Address</button>
            </div>
        </div>
    )
}
