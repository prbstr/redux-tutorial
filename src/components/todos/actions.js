import { ADD_TODO } from "./action-types";

export const addToDo = content => ({
  type: ADD_TODO,
  payload: {
    content
  }
});