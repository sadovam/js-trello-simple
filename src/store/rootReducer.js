import { combineReducers } from "redux";
import { boardReducer } from "./boardReducer";
import { homeReducer } from "./homeReducer";

export const rootReducer = () => combineReducers({
    home: homeReducer, 
    board: boardReducer
});