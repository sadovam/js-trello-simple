import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchData } from '../api/api';
import { requestedData } from './actions';
import { FETCH_DATA } from "./types";

export function* sagaWatcher() {
    yield takeEvery(FETCH_DATA, dataWorker);
}

function* dataWorker(action) {
    try {
        const payload = yield call(() => fetchData(action.payload));
        yield put(requestedData(payload));
    } catch(err) {
        console.error("EEE>> ", err);
    }
}
