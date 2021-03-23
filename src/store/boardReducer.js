import { REQUESTED_BOARD } from "./types";

const initialState = {
  board: {}
}

export const boardReducer = (state=initialState, action) => {
  switch(action.type) {
    case REQUESTED_BOARD:
      return { ...state, board: action.payload};
    default:
      return { ...state };
  };
};