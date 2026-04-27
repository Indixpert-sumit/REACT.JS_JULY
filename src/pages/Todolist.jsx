import { useState } from "react";
import { Button } from "react-bootstrap";

const Todolist = () => {
  const [input, setinputvalue] = useState('');
  const [task, settask] = useState([]);

  const handleinputchange = (value) => {
    setinputvalue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) return;
    if (task.includes(input)) {
      setinputvalue(""); // Clear input even if it's a duplicate
      return;
    }

    settask((prevTasks) => [...prevTasks, input]);
    setinputvalue("");
  };

  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = task.filter((_, index) => index !== indexToDelete);
    settask(updatedTasks);
  };

  return (
    <section className="todo_container">
      <header>To-Do-List</header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="input"
              value={input}
              onChange={(event) => handleinputchange(event.target.value)}
            />
            <Button type="submit" className="todo_btn">Add Task</Button>
          </div>
        </form>

        <div>
          <ul>
            {task.map((currenttask, index) => {
              return (
                <li key={index}>
                  <span>{currenttask}</span>
                  <Button
                    style={{ background: "red", border: "red" }}
                    className="deletebtn"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Todolist;