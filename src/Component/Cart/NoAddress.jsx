import React from 'react'
import "../Cart/Noaddress.css"
export const NoAddress = ({setActive}) => {
  return (
    <div className='NoAddress'>
        <button onClick={()=>[
          setActive(true)
        ]}><span>+</span><span> Add New Address</span></button>
    </div>
  )
}
