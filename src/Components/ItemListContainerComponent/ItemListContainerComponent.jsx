import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
    const customStyles = {
        color: "teal",
        fontSize: "1rem",
        margin:"auto",
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
  return (
    <div style={customStyles}>{greeting}</div>
  )
}

export default ItemListContainerComponent