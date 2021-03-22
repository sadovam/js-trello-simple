import { CHANGE_INPUT_VALUE, HIDE_MESSAGE, MAKE_MESSAGE_VISIBLE, REQUESTED_DATA } from "./types";

const initialState = {
    data: [],
    newBoardTitle: '',
    showMessage: null,
}

export const homeReducer = (state=initialState, action) => {
    switch(action.type) {
        case MAKE_MESSAGE_VISIBLE:
            return { ...state, showMessage: action.payload};
        case HIDE_MESSAGE:
            return { ...state, showMessage: null};
        case REQUESTED_DATA:
            return { ...state, data: action.payload};
        case CHANGE_INPUT_VALUE:
            return { ...state, newBoardTitle: action.payload};
        default:
            return { ...state };
    };
};