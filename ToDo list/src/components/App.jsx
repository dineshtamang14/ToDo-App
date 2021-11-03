import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const tasks = (e)=>{
    const newTask = e.target.value;
    setList(...newTask)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="task" type="text" />
        <button>
          <span onClick={tasks}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
          {list.map(task =>(
            <li>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
