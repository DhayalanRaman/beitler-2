import types from "./actionTypes";

export const getStoreStart = () => ({
    type: types.GET_STORAGE_START,
})

export const getStoreSuccess = (store) => ({
    type: types.GET_STORAGE_SUCCESS,
    payload: store,
})

export const getStoreFailure = (error) => ({
    type: types.GET_STORAGE_FAILURE,
    payload: error,
})