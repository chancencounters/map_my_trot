import React from 'react';
import HeaderContainer from './headers/header_container';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    { children }
  </div>
);

export default App;
