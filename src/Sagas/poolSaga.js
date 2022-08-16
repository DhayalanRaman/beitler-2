import {
    call,
    put,
    delay,
    takeLatest, fork
}from 'redux-saga/effects';
import { poolApi } from '../Api/Config';
import types from '../Actions/actionTypes';
import { getPoolProviderSuccess, getPoolProviderFailure } from '../Actions/poolActions';

function* onLoadPoolsStartAsync() {
    try {
        const res = yield call(poolApi);
        const Pools = JSON.parse(res.data)
        if (res.status === 200) {
            yield delay(100);
            yield put(getPoolProviderSuccess(Pools))
        }
    } catch (error) {
        yield put(getPoolProviderFailure(error.res))
    }
}

function* onLoadPools() {
    yield takeLatest(types.GET_POOL_PROVIDER_START, onLoadPoolsStartAsync)
}

export function* poolSaga() {
    yield fork(onLoadPools)
}