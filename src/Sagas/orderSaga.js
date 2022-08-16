import {
    call,
    put,
    delay,
    takeEvery,
}
    from 'redux-saga/effects';
import { orderApi } from '../Api/Config';
import { getOrderSuccess, getOrderFailure } from '../Actions/orderAction';
import types from '../Actions/actionTypes';

export function* onLoadOrdersStartAsync() {
    try {
        const res = yield call(orderApi);
        if (res.status === 200) {
            const orders = JSON.parse(res.data)
            yield delay(100);
            yield put(getOrderSuccess(orders.data))
            // console.log(orders.data)
        }
    } catch (error) {
        yield put(getOrderFailure(error.res.data))
    }
}

export function* onLoadOrders() {
    yield takeEvery(types.GET_ORDER_START, onLoadOrdersStartAsync)
}
export function* orderSagas() {
    yield call(onLoadOrders)
}