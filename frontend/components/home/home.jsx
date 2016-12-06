import React from 'react';
import Shortcuts from '../shortcuts';
import ProfileTabs from './profile_tabs';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Shortcuts />
        <ProfileTabs />
        { children }
      </div>
    );
  }
}

export default Home;
