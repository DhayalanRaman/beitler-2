import types from '../Actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  lookup: [],
  error: null,
};

const lookupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_LOOKUP_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_LOOKUP_SUCCESS:
      return {
        ...state,
        loading: false,
        lookup: action.payload,
        error: null,
      };
    case types.GET_LOOKUP_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.payload.error,
       }
    default:
      return state;      
  }
};

export default lookupReducer;