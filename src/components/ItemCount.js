import React, { useState } from "react";

export const ItemCount = () => {
  const [count, setCount] = useState(1);

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="container-addItems">
        <div className="counter">
          <button onClick={removeItem}>-</button>
          <h5> {count} </h5>
          <button onClick={addItem}>+</button>
        </div>
        <div className="addToCart">
          <button>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};