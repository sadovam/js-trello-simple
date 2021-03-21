import { call, put, takeEvery } from 'redux-saga/effects';
import api from './api';
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


async function fetchData(url) {
    return await api.get(url);
}