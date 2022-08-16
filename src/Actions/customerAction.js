import types from "./actionTypes";

export const getCustomerStart = () => ({
  type: types.GET_CUSTOMER_START,
});

export const getCustomerSuccess = (customer) => ({
  type: types.GET_CUSTOMER_SUCCESS,
  payload: customer,
});

export const getCustomerFailure = (error) => ({
  type: types.GET_CUSTOMER_FAILURE,
  payload: error,
});

export const createCustomerStart = (customer) => ({
  type: types.CREATE_CUSTOMER_START,
  payload: customer,
});

export const createCustomerSuccess = () => ({
  type: types.CREATE_CUSTOMER_SUCCESS,
});

export const createCustomerFailure = (error) => ({
  type: types.CREATE_CUSTOMER_FAILURE,
  payload: error,
});

export const updateCustomerStart = (customer) => ({
  type: types.UPDATE_CUSTOMER_START,
  payload: customer,
});

export const updateCustomerSuccess = () => ({
  type: types.UPDATE_CUSTOMER_SUCCESS,
});

export const updateCustomerFailure = (error) => ({
  type: types.UPDATE_CUSTOMER_FAILURE,
  payload: error,
});