import types from "../Actions/actionTypes";

const INITIAL_STATE = {
  events: [],
  loading: false,
  error: null,
};


const eventsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case types.GET_EVENTS_START:
    case types.CREATE_EVENT_START:
    case types.UPDATE_EVENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
        error: null,
      };
    case types.CREATE_EVENT_SUCCESS:
    case types.UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      }
    case types.GET_EVENTS_FAILURE:
    case types.CREATE_EVENT_FAILURE:
    case types.UPDATE_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default eventsReducer;