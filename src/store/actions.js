import { FETCH_BOARDS, FETCH_DATA, REQUESTED_BOARDS } from "./types";

export const fetchBoards = () => ({ type: FETCH_BOARDS });
export const fetchData = (url) => ({ type: FETCH_DATA, payload: url });

export const requestedBoards = (data) => (
    {
        type: REQUESTED_BOARDS,
        payload: data,
    }
);