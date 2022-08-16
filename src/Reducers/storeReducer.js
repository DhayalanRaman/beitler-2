import types from '.././Actions/actionTypes';

const INITIAL_STATE = {
    loading: false,
    store: [],
    erroe: null,
};

const storeReducer = (state = INITIAL_STATE, action = {}) =>{
    switch(action.type) {
        case types.GET_STORAGE_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case types.GET_STORAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                store: action.payload,
                error: null,
            };
        case types.GET_STORAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default storeReducer;
