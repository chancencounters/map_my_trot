import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form_container';

const _redirectIfLoggedIn = (nextState, replace) => {
  if (Boolean(window.currentUser)) {
    replace("/");
  }
};

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }/>
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
