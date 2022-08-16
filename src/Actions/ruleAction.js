import types from "./actionTypes";

export const getRuleStart = () => ({
    type: types.GET_RULES_START,
})

export const getRuleSuccess = (rules) => ({
    type: types.GET_RULES_SUCCESS,
    payload: rules,
})

export const getRuleFailure = (error) => ({
    type: types.GET_RULES_FAILURE,
    payload: error,
})

export const createRuleStart = (rule) => ({
    type: types.CREATE_RULE_START,
    payload: rule,
})

export const createRuleSuccess = () =>({
    type: types.CREATE_RULE_SUCCESS,
})

export const createRuleFailure = (error) =>({
    type: types.CREATE_RULE_FAILURE,
    payload: error,
});

export const updateRuleStart = (rule) => ({
    type: types.UPDATE_RULE_START,
    payload: rule,
});

export const updateRuleSuccess = () => ({
    type: types.UPDATE_RULE_SUCCESS,
});

export const updateRuleFailure = (error) => ({
    type: types.UPDATE_RULE_FAILURE,
    payload: error,
});