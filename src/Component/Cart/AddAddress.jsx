import React, { useState } from 'react'
import "../Cart/AddAddress.css"

export const AddAddress = ({active,setActive,onchange,onsubmit}) => {
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
                    <input placeholder='Pin Code'   name="a"required   onChange={onchange}/>
                    <input placeholder='Flat/House No.'  name="b"  required  onChange={onchange}/>
                    <input placeholder='Floor No.' required  name="c" onChange={onchange}/>
                    <input placeholder='Tower No.'  required name="d" onChange={onchange}/>
                    <input placeholder='Bulding/Apartment Name'  required name="e" onChange={onchange} />
                    <input placeholder='Address'  required name="f" onChange={onchange} />
                    <input placeholder='Landmark/Area'  required name="g"  onChange={onchange}/>
                    <input placeholder='City/State'  required name="h" onChange={onchange}/>
                </div>
            </div>
            <div className='contact-details global'>
                <div>
                    Contact Details
                </div>
                <div>
                    <input type="text" placeholder='Name'  name="i" required  />
                    <input type="number" placeholder='PhoneNo' name="j" required />

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
                <button onClick={onsubmit}>Save Address</button>
            </div>
        </div>
    )
}
