import React, { useState } from "react";

function App() {
  const [list, setList] = useState("");

  const tasks = (e)=>{
    const newTask = e.target.value;
    setList(prevValue =>{
      return {
        ...prevValue + newTask
      }
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={tasks} type="text" />
        <button>
          <span onClick={addTask}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
