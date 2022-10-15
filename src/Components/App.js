import { useState } from "react";
import { Button } from "./Button";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo !== "") {
      setTodo("");
      setTodos((currentArray) => {
        const newArray = [...currentArray, todo];
        return newArray;
      });
    }
  };
  return (
    <div className="App">
      <h1>My Todo list: {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo_input">Type in your todo here</label>
        <input
          onChange={onChange}
          type="text"
          value={todo}
          id="todo_input"
        ></input>

        {/* <button>Type in your todo</button> */}
        <Button text="Submit your todo" />
      </form>
      <ul>
        {todos.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
