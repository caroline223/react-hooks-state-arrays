import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cusine : {food.cuisine}
    </li>
  ))

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
  }

  function handleLiClick(id){
    const newFoodArray = foods.map((food) => {
      if (food.id === id){
        return {
          ...food, heatLevel: food.heatLevel + 1
        };
      }
      else {
        return food;
      }
    })
    setFoods(newFoodArray)
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
    </select>
      <ul>{foodList}</ul>
    </div>
    
  );
}

export default SpicyFoodList;
