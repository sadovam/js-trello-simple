import { REQUESTED_DATA } from "./types";

const initialState = {
    data: []
}

export const homeReducer = (state=initialState, action) => {
    switch(action.type) {
        case REQUESTED_DATA:
            return { ...state, data: action.payload};
        default:
            return { ...state };
    };
};