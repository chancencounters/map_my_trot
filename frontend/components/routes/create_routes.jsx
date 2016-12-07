import React from 'react';
import Map from '../map';
import { withRouter } from 'react-router';

class CreateRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='create_routes'>
        <aside className='create_routes_form'>

        </aside>
        { Map }
      </div>
    );
  }
}

export default withRouter(CreateRoutes);
