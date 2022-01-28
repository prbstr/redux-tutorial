import './App.css';
import React, { useState } from 'react';
import { addToDo } from '../components/todos/actions';
import { connect } from 'react-redux';

const App = (props) => {
  const [items, setItems] = useState([]);
  const examples = ['Apples', 'Bananas', 'Clemingolds'];
  const {
    addToDo,
    items: itemsFromStore
  } = props;
  console.log(itemsFromStore);
  const addItem = () => {
    setItems([...items, examples[items.length % 3]]);
  }

  const addItemWithRedux = () => {
    addToDo(examples[itemsFromStore.length % 3]);
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
        <div>
          <button
            className="button"
            onClick={addItemWithRedux}
          >
            Add item through Redux
          </button>
        </div>
        <div className="items-list">
          <ul>
            {itemsFromStore.map(item =>
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

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { addToDo })(App);
