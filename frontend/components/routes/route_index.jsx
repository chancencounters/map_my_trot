import React from 'react';
import RouteIndexItem from './route_index_item';
import { Link } from 'react-router';
import ReactPaginate from 'react-paginate';

class RouteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      pageCount: 0,
    }

    this.handlePageClick = this.handlePageClick.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.pageCount = this.pageCount.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoutes(0).then(
      this.setState({ pageCount: this.pageCount() })
    );
  }

  pageCount() {
    if (this.props.routes.length !== 0) {
      return Math.ceil(this.props.routes[0].total_count / 5);
    }
  }

  handlePageClick(e) {
    let selected = e.selected;
    let offset = Math.ceil(selected * 5);

    this.setState({offset: offset}, () => {
      this.props.fetchRoutes(this.state.offset)
    });
  };

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
        <ReactPaginate previousLabel={"<"}
                       nextLabel={">"}
                       breakLabel={<div>...</div>}
                       breakClassName={"break-me"}
                       pageCount={this.pageCount()}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={1}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    );
  }
}

export default RouteIndex;
