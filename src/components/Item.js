import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setCartStatus]=useState(false)

  function pushToCart(){
    setCartStatus(true)
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={pushToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
