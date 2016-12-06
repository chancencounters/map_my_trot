import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SessionFormContainer from './sessions/session_form_container';
import HeaderContainer from './headers/header_container';
import Welcome from './welcome';
import App from './app';
import HomeContainer from './home_container';

const _redirectIfLoggedIn = (nextState, replace) => {
  if (Boolean(window.currentUser)) {
    replace("/home");
  }
};

const _redirectIfLoggedOut = (nextState, replace) => {
  if (!window.currentUser) {
    replace("/login");
  }
};

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Welcome } onEnter={ _redirectIfLoggedIn }/>
        <Route path="/home" component={ HomeContainer } />
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


export default Root;
