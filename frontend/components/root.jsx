import React from 'react';
import { Provider } from 'react-redux';
import { Router,
  Route,
  IndexRoute,
  hashHistory,
  IndexRedirect
} from 'react-router';

import Welcome from './welcome';
import App from './app';
import Home from './home/home';
import SessionFormContainer from './sessions/session_form_container';
import HeaderContainer from './headers/header_container';
import CreateRouteContainer from './routes/create_route_container';
import RouteIndexContainer from './routes/route_index_container';
import ActivityFeedContainer from './home/activity_feed/activity_feed_container';
import DashboardContainer from './home/dashboard/dashboard_container';
import FriendsContainer from './friends/friends_container';
import RouteDetailContainer from './routes/route_detail_container';
import LogTrotContainer from './trots/log_trot_container';
import TrotIndexContainer from './trots/trot_index_container';
import MyFriendsContainer from './friends/my_friends_container';
import FriendRequestsContainer from './friends/friend_requests_container';
import FindFriendsContainer from './friends/find_friends_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/home");
    }
  };

  const _redirectIfLoggedOut = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/login");
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Welcome } onEnter={ _redirectIfLoggedIn }/>

          <Route
            path="home"
            component={ Home }
            onEnter={ _redirectIfLoggedOut }>
            <IndexRedirect to="/home/activity_feed"/>
            <Route
              path="activity_feed"
              component={ ActivityFeedContainer }
              onEnter={ _redirectIfLoggedOut }/>
            <Route
              path="dashboard"
              component={ DashboardContainer }
              onEnter={ _redirectIfLoggedOut }/>
            <Route
              path="my_friends"
              component={ MyFriendsContainer }
              onEnter={ _redirectIfLoggedOut }/>

          </Route>

          <Route
            path="friends"
            component={ FriendsContainer }
            onEnter={ _redirectIfLoggedOut }>
            <IndexRedirect to="/friends/my_friends"/>
            <Route
              path="my_friends"
              component={ MyFriendsContainer }
              onEnter={ _redirectIfLoggedOut }/>

            <Route path="friend_requests"
              component={ FriendRequestsContainer }
              onEnter={ _redirectIfLoggedOut }/>

            <Route path="find_friends"
              component={ FindFriendsContainer }
              onEnter={ _redirectIfLoggedOut }/>
          </Route>

          <Route path="/create_route"
            component={ CreateRouteContainer }
            onEnter={ _redirectIfLoggedOut }/>

          <Route path="/routes"
            component={ RouteIndexContainer }
            onEnter={ _redirectIfLoggedOut }/>

          <Route path="/route/:id"
            component={ RouteDetailContainer }
            onEnter={ _redirectIfLoggedOut }/>

          <Route path="/log_trot"
            component={ LogTrotContainer }
            onEnter={ _redirectIfLoggedOut }/>

          <Route path="/trots"
            component={ TrotIndexContainer }
            onEnter={ _redirectIfLoggedOut }/>

        </Route>
        <Route
          path="/login"
          component={ SessionFormContainer }
          onEnter={ _redirectIfLoggedIn }/>
        <Route
          path="/signup"
          component={ SessionFormContainer }
          onEnter={ _redirectIfLoggedIn }/>
      </Router>
    </Provider>
  );
};



export default Root;
