import React from 'react';
import HeaderContainer from './headers/header_container';
import Footer from './footer';

const App = ({ children }) => (
  <div className="main_body_container">
    <HeaderContainer />
    { children }
  </div>
);

export default App;
