import { CHANGE_INPUT_VALUE, HIDE_MESSAGE, HIDE_MODAL, MAKE_MESSAGE_VISIBLE, REQUESTED_DATA, SHOW_MODAL } from "./types";

const initialState = {
  data: [],
  newBoardTitle: '',
  showMessage: {title: '', text: ''},
  showModal: null,
}

export const homeReducer = (state=initialState, action) => {
  switch(action.type) {
    case MAKE_MESSAGE_VISIBLE:
      return { ...state, showMessage: action.payload};
    case HIDE_MESSAGE:
      return { ...state, showMessage: {title: '', text: ''}};
    case REQUESTED_DATA:
      return { ...state, data: action.payload};
    case CHANGE_INPUT_VALUE:
      return { ...state, newBoardTitle: action.payload};
    case SHOW_MODAL:
      return { ...state, showModal: action.payload};
    case HIDE_MODAL:
      return { ...state, showModal: null};
    default:
      return { ...state };
  };
};