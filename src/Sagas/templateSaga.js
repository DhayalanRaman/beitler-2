import {
    call,
    put,
    takeLatest,
    delay,
    fork,
} from 'redux-saga/effects';
import types from '../Actions/actionTypes';
import {
    templateApi,
    templateCreateApi,
    updatetemplateApi,
    deletetemplateApi,
} from '../Api/Config';
import {
    getTemplateSuccess,
    getTemplateFailure,
    createTemplateSuccess,
    createTemplateFailure,
    updateTemplateSuccess,
    updateTemplateFailure,
    deleteTemplateSuccess,
    deleteTemplateFailure
} from '../Actions/templateAction';

export function* onLoadTemplateStartAsync() {
    try {
        const res = yield call(templateApi);
        if (res.status === 200) {
            const template = JSON.parse(res.data)
            yield delay(100);
            yield put(getTemplateSuccess(template))
        }
    } catch (error) {
        yield put(getTemplateFailure(error.res.data))
    }
}

export function* onLoadCreateStartAsync({ payload }) {
    try {
        const response = yield call(templateCreateApi, payload)
        const template = JSON.parse(response.data)
        if (response.status === 200) {
            yield put(createTemplateSuccess(template))
        }
    } catch (error) {
        yield put(createTemplateFailure(error.res.data))
    }
};

export function* onUpdateTemplateStartAsync({ payload }) {
    try {
        const response = yield call(updatetemplateApi, payload);
        if (response.status === 200) {
            yield put(updateTemplateSuccess());
        }
    } catch (error) {
        yield put(updateTemplateFailure(error.response.data));
    }
}

export function* onDeleteTemplateStartAsync({ payload }) {
    try {
        const response = yield call(deletetemplateApi, payload);
        if (response.status === 200) {
            yield put(deleteTemplateSuccess());
        }
    } catch (error) {
        yield put(deleteTemplateFailure(error.response.data));
    }
}

export function* onLoadTemplate() {
    yield takeLatest(types.GET_TEMPLATE_START, onLoadTemplateStartAsync)
}

export function* onCreateTemplate() {
    yield takeLatest(types.CREATE_TEMPLATE_START, onLoadCreateStartAsync)
}
export function* onUpdateTemplate() {
    yield takeLatest(types.UPDATE_TEMPLATE_START, onUpdateTemplateStartAsync)
}

export function* onDeleteTemplate() {
    yield takeLatest(types.DELETE_TEMPLATE_START, onDeleteTemplateStartAsync)
}

export function* templateSaga() {
    yield fork(onLoadTemplate)
    yield fork(onCreateTemplate)
    yield fork(onUpdateTemplate)
    yield fork(onDeleteTemplate)
}