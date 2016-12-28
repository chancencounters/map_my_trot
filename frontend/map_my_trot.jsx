import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup } from './actions/session_actions';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else  {
    store = configureStore();
  }
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  window.store = store;
  ReactDOM.render(<Root store={ store } />, root);
});
