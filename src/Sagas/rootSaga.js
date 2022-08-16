import { all, call } from 'redux-saga/effects';
import { authSagas } from './authSaga';
import { orderSagas } from './orderSaga';
import { eventsSagas } from './eventSaga';
import { templateSaga } from './templateSaga';
import { ruleSaga } from './ruleSaga';
import { lookupSaga } from './lookupSaga';
import { customerSaga } from './customerSaga';
import { storeSaga } from './storeSaga';
import { poolSaga } from './poolSaga'

export default function* rootSaga() {
  yield all([
    call(authSagas), 
    call(orderSagas),
    call(eventsSagas),
    call(templateSaga),
    call(ruleSaga),
    call(lookupSaga),
    call(customerSaga),
    call(storeSaga),
    call(poolSaga)
  ]);
}  