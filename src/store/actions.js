import { FETCH_DATA, REQUESTED_DATA } from "./types";

export const fetchData = (url) => ({ type: FETCH_DATA, payload: url });

export const requestedData = (data) => (
    {
        type: REQUESTED_DATA,
        payload: data,
    }
);