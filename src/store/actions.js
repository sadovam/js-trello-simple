import { FETCH_BOARDS, REQUESTED_BOARDS } from "./types";

export const fetchBoards = () => ({ type: FETCH_BOARDS });

export const requestedBoards = (data) => (
    {
        type: REQUESTED_BOARDS,
        payload: data,
    }
);