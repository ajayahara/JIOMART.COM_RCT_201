import React from 'react'
import { AddressItem } from '../../Component/Cart/AddressItem'
import { CartNav } from '../../Component/Cart/CartNav'
import { DeliveryAddress } from '../../Component/Cart/DeliveryAddress'
import {AddAddress} from "../../Component/Cart/AddAddress"
import { NoAddress } from '../../Component/Cart/NoAddress'
import { PaymentDetils } from '../../Component/Cart/PaymentDetils'
import "../Cart/Address.css"
export const Address = () => {
  return (
    <div className='Address'>
      <CartNav />
      <div>
        <div>Order Summary</div>
        <div></div>
      </div>
      <div>
        <div>
          <NoAddress/>
          <div className='basket'>
            <div>
              <div>Groceries Basket <span>(1 items)</span></div>
              <div>₹129.00</div>
            </div>
            <div>
              <AddressItem />
            </div>
          </div>
        </div>
        <div>
          <PaymentDetils/>
          <div className='PaymentButton'><button>Make Payment</button></div>
        </div>
      </div>
      <AddAddress/>
    </div>
  )
}
