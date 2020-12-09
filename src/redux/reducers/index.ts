import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterStore from './counterStore.reducer';

const reducers = combineReducers({
  routing: routerReducer,
  counterStore,
});

export default reducers;
