import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const examples = ['Code', 'Eat', 'Sleep'];
  
  const addItem = () => {
    setItems([...items, examples[items.length % 3]]);
  }

  return (
    <div className="app">
      <div className="app-container">
        <div>
          <button
            className="button"
            onClick={addItem}
          >
            Add item
          </button>
        </div>
        <div className="items-list">
          <ul>
            {items.map(item =>
              <li>
                {item}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
