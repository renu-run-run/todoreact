import React, { useState } from 'react';

function TodoItem(props) {
     const [completed, setCompleted] = useState(props.completed);
  
     function handleCompletedChange() {
       // Update completed status in state
       setCompleted(!completed);
       
       // Call parent component's handleCompletedChange function
      props.onCompletedChange(props.id, !completed);
     }
  
     function handleDelete() {
     // Call parent component's handleDelete function
     props.onDelete(props.id);
     }
  
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleCompletedChange} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{props.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

function TodoList(props) {
  function handleCompletedChange(id, completed) {
    // Call parent component's handleCompletedChange function
    props.onCompletedChange(id, completed);
  }
  
  function handleDelete(id) {
    // Call parent component's handleDelete function
    props.onDelete(id);
  }
  
  const todoItems = props.items.map(item => {
    return (
      <TodoItem 
        key={item.id} 
        id={item.id} 
        text={item.text} 
        completed={item.completed} 
        onCompletedChange={handleCompletedChange} 
        onDelete={handleDelete} 
      />
    );
  });
  
  return (
    <ul>
      {todoItems}
    </ul>
  );
}

function TodoApp() {
  const [items, setItems] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false }
  ]);
  
  function handleCompletedChange(id, completed) {
    // Update completed status in state
    const newItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: completed
        };
      } else {
        return item;
      }
    });
    setItems(newItems);
  }
  
  function handleDelete(id) {
    // Remove item from state
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }
  
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList items={items} onCompletedChange={handleCompletedChange} onDelete={handleDelete} />
    </div>
  );
}

export default TodoApp;