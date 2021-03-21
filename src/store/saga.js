import { call, put, takeEvery } from 'redux-saga/effects';
import { requestedBoards } from './actions';
import { FETCH_BOARDS, FETCH_DATA } from "./types";

export function* sagaWatcher() {
    yield takeEvery(FETCH_BOARDS, sagaWorker);
    yield takeEvery(FETCH_DATA, dataWorker);
}

function* sagaWorker() {
    try {
        const payload = yield call(fetchBoards);
        yield put(requestedBoards(payload));
    } catch(err) {
        console.error("EEE>> ", err);
    }
}

async function fetchBoards() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7');
    return await response.json();
}

function* dataWorker(action) {
    try {
        const payload = yield call(() => fetchData(action.payload));
        yield put(requestedBoards(payload));
    } catch(err) {
        console.error("EEE>> ", err);
    }
}


const baseURL = 'https://trello-back.shpp.me/asadov/api/v1/';

const jsonHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: 'Bearer 123'
});

const getInit = {
    method: 'GET',
    headers: jsonHeaders,
};

async function fetchData(url) {
    const response = await fetch(baseURL + url, getInit);
    return await response.json();
}