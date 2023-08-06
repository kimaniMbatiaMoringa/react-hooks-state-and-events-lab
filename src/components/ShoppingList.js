import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory]=useState('')
  const [filteredItems, setFilteredItems]=useState(items)

  function setCategory(event){
    //alert(`set category to ${event.target.value}`);
    let category = event.target.value;
    setSelectedCategory(category)
    let filtered = items.filter((item)=>{
      return item.category.includes(category)
    })
    setFilteredItems(filtered)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={setCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
