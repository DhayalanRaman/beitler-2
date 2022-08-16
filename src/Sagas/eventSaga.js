import {
  call,
  put,
  delay,
  takeLatest,
  fork
} from 'redux-saga/effects';
import {
  eventApi,
  createEventApi,
  updateEventApi,
} from '../Api/Config';
import types from '../Actions/actionTypes';
import {
  getEventsSuccess,
  getEventsFailure,
  createEventSuccess,
  createEventFailure,
  updateEventSuccess,
  updateEventError,
} from '../Actions/eventAction';

export function* onLoadEventsStartAsync() {
  try {    
    const res = yield call(eventApi);
    if (res.status === 200) {
      const events = JSON.parse(res.data)
      yield delay(100);
      yield put(getEventsSuccess(events))
    }
  } catch (error) {
    yield put(getEventsFailure(error.res.data || null))
  }
}
// getEventsStart

export function* onCreateEventsStartAsync({ payload }) {
  try {
    const res = yield call(createEventApi, payload);
    const events = JSON.parse(res.data)
    if (res.status === 200) {
      yield put(createEventSuccess(events))
    }
  } catch (error) {
    yield put(createEventFailure(error.res.data))
  }
}

export function* onUpdateEventStartAsync({ payload }) {
  try {
    const response = yield call(updateEventApi, payload);
    if (response.status === 200) {
      yield put(updateEventSuccess());
    }
  } catch (error) {
    yield put(updateEventError(error.response.data));
  }
}


export function* onLoadEvents() {
  yield takeLatest(types.GET_EVENTS_START, onLoadEventsStartAsync)
}

export function* onCreateEvents() {
  yield takeLatest(types.CREATE_EVENT_START, onCreateEventsStartAsync)
}

export function* onUpdateEvents() {
  yield takeLatest(types.UPDATE_EVENT_START, onUpdateEventStartAsync)
}

export function* eventsSagas() {
  yield fork(onLoadEvents)
  yield fork(onCreateEvents)
  yield fork(onUpdateEvents)
}

