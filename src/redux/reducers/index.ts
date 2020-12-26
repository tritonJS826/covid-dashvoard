import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appStore from './appStore.reducer';

const reducers = combineReducers({
  routing: routerReducer,
  appStore,
});

export default reducers;
