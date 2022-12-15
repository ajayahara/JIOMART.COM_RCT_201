import React from 'react'
import "../Cart/CartLoginItems.css"
import { CartItem } from '../../Component/Cart/CartItem'
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

                </div>
            </div>
        </div>
    </div>
  )
}
