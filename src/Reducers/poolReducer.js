import types from '../Actions/actionTypes';

const INITIAL_STATE = {
    loading: false,
    pools: [],
    error: null,
};

const getPoolReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_POOL_PROVIDER_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case types.GET_POOL_PROVIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                pools: action.payload,
                error: null,
            };
        case types.GET_POOL_PROVIDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
};

export default getPoolReducer; 