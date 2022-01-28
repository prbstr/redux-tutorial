import { ADD_TODO } from "./action-types";

const initialState = {
  items: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { content } = action.payload;
      return {
        ...state,
        items: [...state.items, content]
      }
    };
    default:
      return state;
  }
}
