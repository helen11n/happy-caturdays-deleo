import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd, id}) => {
  const [count, setCount] = useState(initial);

 // const [buttonFinish, setButtonFinish] = useState(false)
 




  
  const addItem = () => {

    count < stock ? setCount(count + 1) : setCount(count)
  }

  const removeItem = () => {
    count > initial ? setCount(count - 1) : setCount(initial)
  }

/* const onAdd = (count) => {

   count == 1 ?  alert(`Se agregó ${count} producto al carrito`) : alert(`Se agregaron ${count} productos al carrito`)
    
 }*/ 

  return (
    <>
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
    </>
  );
};