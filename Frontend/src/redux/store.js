import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { locationsReducer, demographicsReducer, trialsPerCityReducer , officialsReducer  } from './reducers/analyticsReducer';

const rootReducer = combineReducers({
  locations: locationsReducer,
  demographics: demographicsReducer,
  trialsPerCity: trialsPerCityReducer,
  officials: officialsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
