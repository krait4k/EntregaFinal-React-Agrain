import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidgetComponent = () => {
  const customStyles = {fontSize: "1.2rem", marginRight: ".5rem" }
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} style={customStyles}/>
      <span style={customStyles}>8</span>
    </div>
  )
}

export default CartWidgetComponent