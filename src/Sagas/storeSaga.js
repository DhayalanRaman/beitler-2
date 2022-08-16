import types from '.././Actions/actionTypes';
import { getStoreApi } from '.././Api/Config';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { getStoreSuccess, getStoreFailure } from '../Actions/storageAction';

function* onLoadAsyncGetStoreStart() {
    try {
        const res = yield call(getStoreApi);

        if (res.status === 200) {
            const store = JSON.parse(res.data);
            yield delay(500);
            yield put (getStoreSuccess(store));
        }
    } catch (error) {
        yield put (getStoreFailure(error.res.data))
    }
};

function* onGetStore() {
    yield takeLatest (types.GET_STORAGE_START ,onLoadAsyncGetStoreStart);
};

export function* storeSaga() {
    yield call(onGetStore)
}