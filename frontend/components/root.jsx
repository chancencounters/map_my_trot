import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form_container';
import HeaderContainer from './header_container';

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

// <IndexRoute component={ WelcomeContainer } />
const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ HeaderContainer }/>
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
// <Index Route component={ Splash }

export default Root;
