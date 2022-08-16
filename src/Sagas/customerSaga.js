import {
    call,
    put,
    delay,
    takeLatest,
    fork
}
    from 'redux-saga/effects';
import {
    getCustemerApi,
    createCustomerApi,
    updateCustomerApi,
} from '../Api/Config';
import {
    getCustomerSuccess,
    getCustomerFailure,
    createCustomerSuccess,
    createCustomerFailure,
    updateCustomerSuccess,
    updateCustomerFailure,
} from '../Actions/customerAction';
import types from '../Actions/actionTypes';

function* onLoadCustomerStartAsync() {
    try {
        const response = yield call(getCustemerApi);     
        if (response.status === 200) {
            const customer = JSON.parse(response.data)
            yield delay(100);
            yield put(getCustomerSuccess(customer));
        }
    } catch (error) {
        yield put(getCustomerFailure(error.response.data));
    }
};

function* onCreateCustomerStartAsync({ payload }) {
    try {
        const res = yield call(createCustomerApi, payload);
        const customer = JSON.parse(res.data)
        if (res.status === 200) {
            yield put(createCustomerSuccess(customer))
        }
    } catch (error) {
        yield put(createCustomerFailure(error.res.data))
    }
};

function* onUpdateCustomerStartAsync({ payload }) {
    try {
        const response = yield call(updateCustomerApi, payload);
        if (response.status === 200) {
            yield put(updateCustomerSuccess());
        }
    } catch (error) {
        yield put(updateCustomerFailure(error.response.data));
    }
}

function* onLoadCustomer() {
    yield takeLatest(types.GET_CUSTOMER_START, onLoadCustomerStartAsync)
};

function* onCreateCustomer() {
    yield takeLatest(types.CREATE_CUSTOMER_START, onCreateCustomerStartAsync)
};

function* onUpdateCustomer() {
    yield takeLatest(types.UPDATE_CUSTOMER_START, onUpdateCustomerStartAsync)
};

export function* customerSaga() {
    yield fork(onLoadCustomer)
    yield fork(onCreateCustomer)
    yield fork(onUpdateCustomer)
}