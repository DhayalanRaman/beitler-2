import types from "./actionTypes";

export const getEventsStart = () => ({
  type: types.GET_EVENTS_START,
});

export const getEventsSuccess = (events) => ({
  type: types.GET_EVENTS_SUCCESS,
  payload: events,
});

export const getEventsFailure = (error) => ({
  type: types.GET_EVENTS_FAILURE,
  payload: error,
});

export const createEventStart = (event) => ({
  type: types.CREATE_EVENT_START,
  payload: event,
});

export const createEventSuccess = () => ({
  type: types.CREATE_EVENT_SUCCESS,
});

export const createEventFailure = (error) => ({
  type: types.CREATE_EVENT_FAILURE,
  payload: error,
}); 

export const updateEventStart = (event) => ({
  type: types.UPDATE_EVENT_START,
  payload: event,
});

export const updateEventSuccess = () => ({
  type: types.UPDATE_EVENT_SUCCESS,
});

export const updateEventError = (error) => ({
  type: types.UPDATE_EVENT_FAILURE,
  payload: error,
});