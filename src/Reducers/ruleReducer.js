import types from "../Actions/actionTypes";

const INITIAL_STATE = {
    rules: [],
    loading: false,
    error: null,
}

const ruleReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.GET_RULES_START:
        case types.CREATE_RULE_START:
        case types.UPDATE_RULE_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case types.GET_RULES_SUCCESS:
            return {
                ...state,
                loading: false,
                rules: action.payload,
                error: null,
            }
        case types.CREATE_RULE_SUCCESS:
        case types.UPDATE_RULE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }
        case types.GET_RULES_FAILURE:
        case types.CREATE_RULE_FAILURE:
        case types.UPDATE_RULE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default ruleReducer;
