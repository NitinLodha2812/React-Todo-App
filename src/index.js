import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Buy groceries", completed: true },
  { id: "todo-1", name: "Go to Gym", completed: false },
  { id: "todo-2", name: "Code!", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
