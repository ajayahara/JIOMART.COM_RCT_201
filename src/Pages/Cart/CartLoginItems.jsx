import React from 'react'
import "../Cart/CartLoginItems.css"
import { CartItem } from '../../Component/Cart/CartItem'
import { Applycoupon } from '../../Component/Cart/Applycoupon'
import { PaymentDetils } from '../../Component/Cart/PaymentDetils'
export const CartLoginItems = () => {
  return (
    <div className='CartLoginitems' >
        <div>
            <div>
                <div>{`My Cart (1)`}</div>
                <div></div>
            </div>
            <div>
                <div>
                    <div className='basket'>
                        <div>
                            <div>Groceries Basket <span>(1 items)</span></div>
                            <div>₹129.00</div>
                        </div>
                        <div>
                            <CartItem/>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <Applycoupon/>
                    <PaymentDetils/>
                    <div className='PaymentButton'><button>Place Order</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}
