import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onEditClick }) {

  const pizzasToDisplay = pizzas.map(p=>{
    return <Pizza 
              key={p.id} 
              myKey={p.id} 
              size={p.size} 
              topping={p.topping} 
              vegetarian={p.vegetarian}
              onEditClick={onEditClick}
            />
  })

  // Return JSX
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzasToDisplay}
      </tbody>
    </table>
  );
}

export default PizzaList;
