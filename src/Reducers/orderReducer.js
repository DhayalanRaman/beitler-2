import types from '../Actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  orders: [],
  error: null,
};

const getOrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ORDER_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: null,
      };
    case types.GET_ORDER_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.payload.error,
       }
    default:
      return state;      
  }
};

export default getOrderReducer; 
// export const getOrderReducer = (state) => state.orders;
// export const getOrderSuccces = (state) => state.Users;
// export const getOrderFail = (state) => state.Users;