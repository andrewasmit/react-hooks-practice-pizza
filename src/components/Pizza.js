import React from "react";

function Pizza({ size, topping, vegetarian, myKey, onEditClick }) {

  function handleEditClick(){
    onEditClick(myKey)
  }

  return (
    <tr id={myKey} onClick={handleEditClick}>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td>
        <button type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
