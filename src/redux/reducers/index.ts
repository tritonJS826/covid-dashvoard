import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterStore from './counterStore.reducer';
import appStore from './appStore.reducer';

const reducers = combineReducers({
  routing: routerReducer,
  counterStore,
  appStore,
});

export default reducers;
