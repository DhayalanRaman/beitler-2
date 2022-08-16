import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_API } from '../Api/Api';

import {
  logInFailure,
  logInSuccess,
} from '../Actions/authActions';
import types from '../Actions/actionTypes';


export const logIn = async(userName, password) => {
  try{
    const response = await axios.post(LOGIN_API, {
      userName,
      password,
    });
    const jwt = await response.data.token
    setTimeout(() => localStorage.setItem("token", (jwt)), 100)    
    return response.data;
  }catch (err) {
    console.error(err);    
  }
};

export function* logInWithCredentials({ payload: { userName, password } }) {
  try {
    const user = yield logIn(userName, password);
    yield put(logInSuccess(user));
  } catch (error) {
    yield put(logInFailure(error));
  }
}

export function* onLogInStart() {
  yield takeLatest(types.LOG_IN_START, logInWithCredentials);
}

export function* authSagas() {
  yield call(onLogInStart)
}