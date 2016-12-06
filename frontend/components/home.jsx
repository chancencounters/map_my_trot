import React from 'react';
import Shortcuts from './shortcuts';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Shortcuts />
        { children }
      </div>
    );
  }
}

export default Home;
