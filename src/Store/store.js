import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../Reducers/rootReducer';
import rootSaga from '../Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware, logger];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;