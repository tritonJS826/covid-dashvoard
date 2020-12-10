import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterStore from './counterStore.reducer';
import listBlockStore from './listBlock.reducer';

const reducers = combineReducers({
  routing: routerReducer,
  counterStore,
  listBlockStore,
});

export default reducers;
