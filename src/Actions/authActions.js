import types from './actionTypes';

export const logInStart = (credentials) => ({
  type: types.LOG_IN_START,
  payload: credentials,  
});

export const logInSuccess = (token) => ({
  type: types.LOG_IN_SUCCESS,
  payload: token,  
});

export const logInFailure = (error) => ({
  type: types.LOG_IN_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});