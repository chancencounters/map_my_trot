import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import routesReducer from './routes_reducer';
import routeDetailReducer from './route_detail_reducer';
import trotDetailReducer from './trotDetail_reducer';
// import trotsReducer from './trots_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  routes: routesReducer,
  routeDetail: routeDetailReducer,
  // trots: trotReducer,
  trotDetail: trotDetailReducer,
});

export default rootReducer;
