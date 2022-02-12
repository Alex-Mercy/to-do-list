import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {

  const [items, setItems] = useState([]);

  const addItem = (InputText) => {
    setItems([
      ...items, InputText]);
  }

  const deleteItem = (id) => {
    setItems(() => {
      return items.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem}/>
      <div>
        <ul>
          {items.map((item, index) => <ToDoItem key={index} id={index} 
          item={item} deleteItem={deleteItem} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
