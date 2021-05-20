import React, { Fragment, useState } from "react";

export const ItemCount = ({ stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

 
  const addItem = () => {

    count < stock ? setCount(count + 1) : setCount(count)
  }

  const removeItem = () => {
    count > initial ? setCount(count - 1) : setCount(initial)
  }



  return (
    <Fragment>
      <div className="container-addItems">
        <div className="counter">
          <button onClick={removeItem}>-</button>
          <h5> {count} </h5>
          <button onClick={addItem}>+</button>
        </div>
        <div className="addToCart">
          <button onClick={ () => onAdd(count)}>Agregar al carrito</button>
        </div>
      </div>
    </Fragment>
  )
}