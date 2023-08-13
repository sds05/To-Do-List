import React, { useState } from "react";

function App() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]); //empty array

  function handleChange(event) {
    const newitem = event.target.value;
    setInput(newitem);
  }

  function handleClick() {
    setItems((prevValue) => [...prevValue, inputText]);
    setInput(""); //clearing off the input text after adding it to the array
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((addItem) => {
            return <li>{addItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
