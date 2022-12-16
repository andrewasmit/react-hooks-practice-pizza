import React from "react";

function Pizza({ size, topping, vegetarian, myKey, onEditClick, disabled, setDisabled }) {


  function handleEditClick(){
    onEditClick(myKey)
    setDisabled(!disabled)
    fetch(`http://localhost:3001/pizzas/${myKey}`, {
      method: "DELETE",
    })
    .then(res=>res.json())
    .then(data=>console.log("Deleted", data));
  }

  return (
    <tr id={myKey} >
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td>
        <button type="button" disabled={disabled} onClick={handleEditClick} className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
