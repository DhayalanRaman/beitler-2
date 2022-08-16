import { combineReducers } from 'redux';
import authReducer from './loginReducer';
import getOrderReducer from './orderReducer';
import getEventReducer from './eventReducer';
import getTemplateReducer from './templateReducer';
import ruleReducer from './ruleReducer';
import lookupReducer from './lookupReducer';
import customerReducer from './customerReducer';
import storeReducer from './storeReducer';
import getPoolReducer from './poolReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    fetchUsers: getOrderReducer,
    fetchEvents: getEventReducer,
    fetchTemplate: getTemplateReducer,
    fetchRule: ruleReducer,
    fetchLookup: lookupReducer,
    fetchCustomer: customerReducer,
    fetchStore: storeReducer,
    fetchPool: getPoolReducer,
});

export default rootReducer;