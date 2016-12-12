import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import routesReducer from './routes_reducer';
import routeDetailReducer from './route_detail_reducer';
import trotDetailReducer from './trot_detail_reducer';
import friendsReducer from './friends_reducer';
import friendshipsReducer from './friendships_reducer';
import potentialFriendsReducer from './potential_friends_reducer';
// import trotsReducer from './trots_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  routes: routesReducer,
  routeDetail: routeDetailReducer,
  trotDetail: trotDetailReducer,
  friends: friendsReducer,
  friendships: friendshipsReducer,
  potentialFriends: potentialFriendsReducer,
  // trots: trotReducer,
});

export default rootReducer;
