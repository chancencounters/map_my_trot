import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Welcome from './welcome';
import App from './app';
import Home from './home/home';
import SessionFormContainer from './sessions/session_form_container';
import HeaderContainer from './headers/header_container';
import CreateRouteContainer from './routes/create_route_container';
import RouteIndexContainer from './routes/route_index_container';

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
            path="/home"
            component={ Home }
            onEnter={ _redirectIfLoggedOut }/>

          <Route path="/create_route"
            component={ CreateRouteContainer }
            onEnter={ _redirectIfLoggedOut }/>

          <Route path="/routes"
            component={ RouteIndexContainer }
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
