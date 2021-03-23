import { CHANGE_INPUT_VALUE, FETCH_POST_DATA, FETCH_DATA, REQUESTED_POST_DATA, REQUESTED_DATA, SHOW_MESSAGE, HIDE_MESSAGE, MAKE_MESSAGE_VISIBLE, REQUESTED_BOARD, FETCH_BOARD } from "./types";

export const fetchData = url => (
    { 
        type: FETCH_DATA, 
        payload: url, 
    }
);

export const requestedData = data => (
    {
        type: REQUESTED_DATA,
        payload: data,
    }
);

export const changeInputValue = newValue => (
    {
        type: CHANGE_INPUT_VALUE,
        payload: newValue,
    }
);

export const fetchPostData = (url, data) => (
    { 
        type: FETCH_POST_DATA, 
        payload: {url: url, data: data}, 
    }
);

export const requestedPostData = data => (
    {
        type: REQUESTED_POST_DATA,
        payload: data,
    }
);

export const showMessage = (title, text) => (
    {
        type: SHOW_MESSAGE,
        payload: {title: title, text: text},
    }
);

export const makeMessageVisible = message => (
    {
        type: MAKE_MESSAGE_VISIBLE,
        payload: message,
    }
);

export const hideMessage = () => ({ type: HIDE_MESSAGE });

export const requestedBoard = data => (
    {
        type: REQUESTED_BOARD,
        payload: data,
    }
);

export const fetchBoard = url => (
    { 
        type: FETCH_BOARD, 
        payload: url, 
    }
);