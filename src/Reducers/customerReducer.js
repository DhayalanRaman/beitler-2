import types from '../Actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  customer: [],
  error: null,
};

const custemerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_CUSTOMER_START:
    case types.CREATE_CUSTOMER_START:
    case types.UPDATE_CUSTOMER_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customer: action.payload,
        error: null,
      };

    case types.CREATE_CUSTOMER_SUCCESS:
    case types.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.GET_CUSTOMER_FAILURE:
    case types.CREATE_CUSTOMER_FAILURE:
    case types.UPDATE_CUSTOMER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state;
  }
};

export default custemerReducer;