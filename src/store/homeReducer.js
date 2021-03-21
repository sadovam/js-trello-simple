import { REQUESTED_BOARDS } from "./types";

const initialState = {
    boards: []
}

export const homeReducer = (state=initialState, action) => {
    switch(action.type) {
        case REQUESTED_BOARDS:
            return { ...state, boards: action.payload};
        default:
            return { ...state };
    };
};