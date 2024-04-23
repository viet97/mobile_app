import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';

import reducers, { listReducer } from './reducers';
import Immutable from 'immutable';
import Config from './Config';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['About'],
};

const middleware = [];

middleware.push(thunk);
Config.useLoggerRedux && middleware.push(logger);

const store = createStore(
  persistReducer(persistConfig, reducers),
  Immutable.Map({ ...listReducer }),
  applyMiddleware(...middleware),
);

const persistor = persistStore(store);

export default () => {
  return { store, persistor };
};
