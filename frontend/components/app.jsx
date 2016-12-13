import React from 'react';
import HeaderContainer from './headers/header_container';
import Footer from './footer';
const App = ({ children }) => (
  <div>
    <HeaderContainer />
    { children }
    <Footer />
  </div>
);

export default App;
