import {
    call,
    put,
    delay,
    takeEvery,
}
    from 'redux-saga/effects';
import { getLookupApi } from '../Api/Config';
import { getLookupSuccess, getLookupFailure } from '../Actions/lookupAction';
import types from '../Actions/actionTypes';

function* onLoadLookupStartAsync() {
    try {
        const res = yield call(getLookupApi);
        if (res.status === 200) {
            const lookup = JSON.parse(res.data)
            yield delay(100);
            yield put(getLookupSuccess(lookup))           
        }
    } catch (error) {
        yield put(getLookupFailure(error.res.data))
    }
}

function* onLoadLookup() {
    yield takeEvery(types.GET_ORDER_START, onLoadLookupStartAsync)
}
export function* lookupSaga() {
    yield call(onLoadLookup)
}