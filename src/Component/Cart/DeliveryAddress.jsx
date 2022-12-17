import React from 'react'
import "../Cart/DeliveryAddress.css"
export const DeliveryAddress = () => {
  return (
    <div className='Delivery'>
        <div>Select Delivery Address</div>
        <div>
           <div>
           <div>
                <input type="radio" checked/>
            </div>
            <div>
                <p>Ajaya</p>
                <p>14</p>
                <p>4</p>
                <p>6</p>
                <p>Ajaya</p>
                <p>krushnapalli</p>
                <p>krushnapalli</p>
                <p>+917684889098</p>
            </div>
           </div>
          <div className='button'>
          <button>Change Address</button>
          </div>
        </div>
    </div>
  )
}
