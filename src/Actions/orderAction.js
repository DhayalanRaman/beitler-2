import  types from './actionTypes';

export const getOrderStart = () => ({
    type: types.GET_ORDER_START,  
  });

  export const getOrderSuccess = (data) => ({
    type: types.GET_ORDER_SUCCESS,
    payload: data,
  }); 

  export const getOrderFailure = (error) => ({
    type: types.GET_ORDER_FAILURE,
    payload: error,
  }); 

