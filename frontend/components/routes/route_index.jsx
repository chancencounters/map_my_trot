import React from 'react';
import RouteIndexItem from './route_index_item';
import { Link } from 'react-router';

class RouteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderMessage = this.renderMessage.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  renderMessage() {
    if (this.props.routes.length === 0) {
      return (
        <div className="empty_routes_message">
          <p>No Routes were found.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="routes_index_container">
        <div className="routes_index_title_container">
          <h2>MY ROUTES</h2>
          <Link to="/create_route">CREATE A ROUTE</Link>
        </div>
        <table className="routes_index_table">
          <thead>
            <tr className="routes_index_header">
              <th className="route_title">Route</th>
              <th className="route_created">Created</th>
              <th className="route_distance">Distance</th>
              <th className="route_name">Name</th>
              <th className="route_origin">Origin</th>
              <th className="route_options">Options</th>
            </tr>
          </thead>
          <tbody>
            { this.props.routes.map((route) => {
              return (
              <RouteIndexItem
                key={ route.id }
                route= { route }
                deleteRoute={ this.props.deleteRoute }/>
            );})}
          </tbody>
        </table>
        { this.renderMessage() }
      </div>
    );
  }
}

export default RouteIndex;
