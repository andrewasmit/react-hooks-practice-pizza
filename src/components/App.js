import React, {useEffect, useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzaData, setPizzaData] = useState([]);
  const [toppingEdit, setToppingEdit] = useState("")
  const [sizeEdit, setSizeEdit] = useState("")
  const [veggie, setVeggie] = useState("")
  const [disabled, setDisabled] = useState(false)


  useEffect(()=>{ 
  fetch("http://localhost:3001/pizzas")
  .then(res=>res.json())
  .then(data=>setPizzaData(data))
}, [])

function handlePizzaEditClick(pizzaToEditId){
  const pizzaToEdit = pizzaData.filter(p=>p.id===pizzaToEditId)
  setToppingEdit(pizzaToEdit[0].topping);
  setSizeEdit(pizzaToEdit[0].size);
  setVeggie(pizzaToEdit[0].vegetarian)
}

function handleEditSubmit(updatedPizza){
  console.log('FORM SUBMITTED', updatedPizza);
  fetch("http://localhost:3001/pizzas",{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(updatedPizza)
  })
  .then(res=>res.json())
  .then(data=>setPizzaData([...pizzaData, data]));
}
// console.log("In APP: ", toppingEdit);
// console.log("In APP: ", sizeEdit);

// Return JSX
  return (
    <>
      <Header />
      <PizzaForm 
          toppingEdit={toppingEdit} 
          setToppingEdit={setToppingEdit}
          sizeEdit={sizeEdit}
          setSizeEdit={setSizeEdit}
          veggie={veggie}
          setVeggie={setVeggie}
          onEditSubmit={handleEditSubmit}
          disabled={disabled} 
          setDisabled={setDisabled}
      />
      <PizzaList 
          pizzas={pizzaData} 
          onEditClick={handlePizzaEditClick}
          disabled={disabled} 
          setDisabled={setDisabled}
      />
    </>
  );
}

export default App;
