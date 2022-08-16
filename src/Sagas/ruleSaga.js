import {
    call,
    put, 
    takeLatest,
    delay,
    fork,
} from "redux-saga/effects";
import types from "../Actions/actionTypes";
import { 
    getRuleSuccess, 
    getRuleFailure,
    createRuleSuccess,
    createRuleFailure,
    updateRuleSuccess,
    updateRuleFailure,
} from "../Actions/ruleAction";
import { 
    getRulesApi,
    createRulesApi,
    updateRulesApi
} from "../Api/Config";

function* onLoadGetRuleStartAsync() {
    try {
        const response = yield call(getRulesApi);
        if (response.status === 200) {
            const rules = JSON.parse(response.data)
            yield delay (500);
            yield put(getRuleSuccess(rules));
        }
        
    } catch (error) {
        yield put(getRuleFailure(error.response.data))
    }
};

export function* onLoadCreateRuleStartAsync({ payload }) {
    try {
        const response = yield call(createRulesApi, payload);
        if (response.status === 200) {
            const rule = JSON.parse(response.data);
            yield put(createRuleSuccess(rule));
        }        
    } catch (error) {
        yield put(createRuleFailure(error.response.data))
    }
};

export function* onLoadUpdateRuleStartAsync({ payload }) {
    try {
        const response = yield call(updateRulesApi, payload);
        if (response.status === 200) {           
            yield put(updateRuleSuccess());
        }        
    } catch (error) {
        yield put(updateRuleFailure(error.response.data))
    }
};

export function* onGetRules() {
    yield takeLatest(types.GET_RULES_START ,onLoadGetRuleStartAsync)
}

export function* onCreateRule() {
    yield takeLatest(types.CREATE_RULE_START, onLoadCreateRuleStartAsync)
}
export function* onUpdateRule() {
    yield takeLatest(types.UPDATE_RULE_START, onLoadUpdateRuleStartAsync)
}

export function* ruleSaga() {
    yield fork(onGetRules)
    yield fork(onCreateRule)
    yield fork(onUpdateRule)
}