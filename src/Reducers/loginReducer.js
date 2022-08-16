import types from '../Actions/actionTypes';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN_START:
      return {
        ...state,     
        loading: true,
        error: null,
      };
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: null,
      };
    case types.LOG_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;