import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { fetchDataAPI, fetchDelDataAPI, fetchPostDataAPI } from '../api/api';
import { fetchBoard, fetchData, hideMessage, makeMessageVisible, requestedBoard, requestedData, showMessage } from './actions';
import { DELETE_BOARD, DELETE_DATA, FETCH_BOARD, FETCH_DATA, FETCH_POST_BOARD, FETCH_POST_DATA, SHOW_MESSAGE } from "./types";

export function* sagaWatcher() {
    yield takeEvery(FETCH_DATA, dataWorker);
    yield takeEvery(FETCH_POST_DATA, dataPostWorker);
    yield takeEvery(SHOW_MESSAGE, messageWorker);
    yield takeEvery(FETCH_BOARD, boardWorker);
    yield takeEvery(FETCH_POST_BOARD, boardPostWorker);
    yield takeEvery(DELETE_DATA, dataDeleteWorker);
    yield takeEvery(DELETE_BOARD, boardDeleteWorker);

}

function* dataWorker(action) {
    try {
        const payload = yield call(() => fetchDataAPI(action.payload));
        yield put(requestedData(payload));
    } catch(err) {
        yield put(showMessage('Fetch data error', err.message));
    }
}

function* dataPostWorker(action) {
    try {
        const payload = yield call(() => fetchPostDataAPI(action.payload));
        yield put(showMessage('Creation result', payload.result));
        yield put(fetchData(action.payload.url));
    } catch(err) {
        yield put(showMessage('Creation error', err.message));
    }
}

function* messageWorker(action) {
    yield put(makeMessageVisible(action.payload));
    yield delay(2000);
    yield put(hideMessage());
}

function* boardWorker(action) {
    try {
        const payload = yield call(() => fetchDataAPI(action.payload));
        yield put(requestedBoard(payload));
    } catch(err) {
        yield put(showMessage('Fetch board error', err.message));
    }
}

function* boardPostWorker(action) {
    try {
        const payload = yield call(() => fetchPostDataAPI(action.payload));
        yield put(showMessage('Creation result', payload.result));
        yield put(fetchBoard('board/' + action.payload.boardId));
    } catch(err) {
        yield put(showMessage('Creation error', err.message));
    }
}

function* dataDeleteWorker(action) {
    try {
        const payload = yield call(() => fetchDelDataAPI(action.payload));
        yield put(showMessage('Delete result', payload.result));
        yield put(fetchBoard('board/' + action.payload.boardId));
    } catch(err) {
        yield put(showMessage('Delete error', err.message));
    }
}

function* boardDeleteWorker(action) {
    try {
        const payload = yield call(() => fetchDelDataAPI(action.payload));
        yield put(showMessage('Delete result', payload.result));
        yield put(fetchData('board/'));
    } catch(err) {
        yield put(showMessage('Delete error', err.message));
    }
}
