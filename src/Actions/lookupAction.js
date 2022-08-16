import types from "./actionTypes";

export const getLookupStart = () => ({
    type: types.GET_LOOKUP_START,
})

export const getLookupSuccess = (lookup) => ({
    type: types.GET_LOOKUP_SUCCESS,
    payload: lookup,
})

export const getLookupFailure = (error) => ({
    type: types.GET_LOOKUP_FAILURE,
    payload: error,
})