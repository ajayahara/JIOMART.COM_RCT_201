import React from 'react'
import "../Cart/DeliveryAddress.css"
export const DeliveryAddress = ({ad,setActive}) => {
  return (
    <div className='Delivery'>
        <div>Select Delivery Address</div>
        <div>
           <div>
           <div>
                <input type="radio" checked/>
            </div>
            <div>
                <p>{ad.i}</p>
                <p>{ad.a}</p>
                <p>{ad.b}</p>
                <p>{ad.c}</p>
                <p>{ad.d}</p>
                <p>{ad.e}</p>
                <p>{ad.f}</p>
                <p>{ad.g}</p>
            </div>
           </div>
          <div className='button'>
          <button onClick={()=>{
            setActive(true)
          }}>Change Address</button>
          </div>
        </div>
    </div>
  )
}
