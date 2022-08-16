import types from "../Actions/actionTypes";

const INITIAL_STATE = {
    template: [],
    loading: false,
    error: null,
}

const getTemplateReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.GET_TEMPLATE_START:
        case types.CREATE_TEMPLATE_START:
        case types.UPDATE_TEMPLATE_START:
        case types.DELETE_TEMPLATE_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case types.GET_TEMPLATE_SUCCESS:
            return {
                ...state,
                loading: false,
                template: action.payload,
                error: null,
            };
        case types.CREATE_TEMPLATE_SUCCESS:
        case types.UPDATE_TEMPLATE_SUCCESS:
        case types.DELETE_TEMPLATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }
        case types.GET_TEMPLATE_FAILURE:
        case types.CREATE_TEMPLATE_FAILURE:
        case types.UPDATE_TEMPLATE_FAILURE:
        case types.DELETE_TEMPLATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
}
export default getTemplateReducer;