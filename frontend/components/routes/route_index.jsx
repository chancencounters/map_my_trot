import React from 'react';
import RouteIndexItem from './route_index_item';
import { Link } from 'react-router';

class RouteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    return (
      <div className="routes_index_container">
        <div className="routes_index_title_container">
          <h2>MY ROUTES</h2>
          <Link to="/create_route">CREATE A ROUTE</Link>
        </div>
        <ul className="routes_index_header">
          <li className="title_route">Route</li>
          <li className="title_created">Created</li>
          <li className="title_distance">Distance</li>
          <li className="title_name">Name</li>
          <li className="title_options">Options</li>
        </ul>
        <ul className="routes_index">
          { this.props.routes.map((route, idx) => (
            <RouteIndexItem
              key={ idx }
              route={ route }
              deleteRoute={ this.props.deleteRoute }/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default RouteIndex;
