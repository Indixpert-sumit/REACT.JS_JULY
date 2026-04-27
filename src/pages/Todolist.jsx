import React, { useReducer, useState } from 'react';
import { Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const Todolist = () => {
  const [tasks, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() === '') {
      alert('Please enter something!');
      return;
    }
    dispatch({ type: 'ADD_TASK', payload: inputValue });
    setInputValue(''); 
  };

  return (
    <div >
      <h1>To-Do-List</h1>
      
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <Button variant="outline-secondary" onClick={handleAdd}>
          Add Task
        </Button>
      </InputGroup>

      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
            {task.text}
            <span 
              onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
            >
             <Button style={{background:"red", border:"red"}}>Delete</Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Todolist;