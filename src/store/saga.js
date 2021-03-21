import { call, put, takeEvery } from 'redux-saga/effects';
import { requestedBoards } from './actions';
import { FETCH_BOARDS } from "./types";

export function* sagaWatcher() {
    yield takeEvery(FETCH_BOARDS, sagaWorker);
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