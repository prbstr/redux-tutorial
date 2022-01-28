import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import reducer from '../components/todos/reducer';

const rootReducer = {
  reducer
};

const store = configureStore(rootReducer);
export default store;