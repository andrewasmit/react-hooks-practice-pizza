import React from "react";

function PizzaForm({  
  toppingEdit, 
  setToppingEdit, 
  sizeEdit, 
  setSizeEdit, 
  veggie, 
  setVeggie,
  onEditSubmit,
  disabled,
  setDisabled
}) {

  function handleEditSubmit(e){
    e.preventDefault();
    const editedPizza = {
      size: sizeEdit,
      topping: toppingEdit,
      vegetarian: veggie,
    }
    onEditSubmit(editedPizza);
    setSizeEdit("")
    setToppingEdit("")
    setDisabled(!disabled)
  }

  function handleVeggieEdit(){
    setVeggie(!veggie);
  }


  // Return JSX
  return (
    <form onSubmit={handleEditSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={toppingEdit}
            onChange={e=>setToppingEdit(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={sizeEdit} onChange={e=>setSizeEdit(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value = {veggie}
              checked={veggie}
              onChange={handleVeggieEdit}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={veggie}
              checked={!veggie}
              onChange={handleVeggieEdit}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
