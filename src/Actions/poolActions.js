import types from './actionTypes';

export const getPoolProviderStart = () => ({
    type: types.GET_POOL_PROVIDER_START,
});

export const getPoolProviderSuccess = (pools) => ({
    type: types.GET_POOL_PROVIDER_SUCCESS,
    payload: pools,
});

export const getPoolProviderFailure = (error) => ({
    type: types.GET_POOL_PROVIDER_FAILURE,
    payload: error,
});




