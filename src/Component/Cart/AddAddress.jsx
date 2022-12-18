import React from 'react'
import "../Cart/AddAddress.css"

export const AddAddress = () => {
    return (
        <div className='AddAddress active'>
            <div>
                <div>
                    Add Address
                </div>
                <img src="https://img.icons8.com/material-sharp/512/multiply.png" alt="" />
            </div>
          <div className='container'>
          <div className='Input-element global'>
                <div>
                    Address Details
                </div>
                <div>
                    <input placeholder='Pin Code' />
                    <input placeholder='Flat/House No.' />
                    <input placeholder='Floor No.' />
                    <input placeholder='Tower No.' />
                    <input placeholder='Bulding/Apartment Name' />
                    <input placeholder='Address' />
                    <input placeholder='Landmark/Area' />
                    <input placeholder='City/State' />
                </div>
            </div>
            <div className='contact-details global'>
                <div>
                    Contact Details
                </div>
                <div>
                    <input type="text" placeholder='Name' />
                    <input type="number" placeholder='PhoneNo' />

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
