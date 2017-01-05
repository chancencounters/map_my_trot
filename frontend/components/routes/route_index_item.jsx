import React from 'react';
import { withRouter } from 'react-router';

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.router.push(`/route/${this.props.route.id}`);
  }

  render() {
    const { route, deleteRoute } = this.props;
    const staticMap = `https://maps.googleapis.com/maps/api/staticmap?size=400x400&path=weight:3%7Ccolor:red%7Cenc:${ route.polyline }&key=AIzaSyA7uwvLREd5yloeRCH3FdgsJvG8D_glP7w`
    return (
      <tr className='route_index_item' onClick={ this.handleClick }>
        <td className='route_map_container'>
          <img src={ staticMap }/>
        </td>
        <td
          className='route_index_item_date'>{ route.date }</td>
        <td
          className='route_index_item_distance'>{ route.distance + " mi"}</td>
        <td
          className='route_index_item_name'>{ route.name }</td>
        <td
          className='route_index_item_origin'>{ route.origin }</td>
        <td
          onClick={ () => deleteRoute(router.id) }
          className='route_index_item_delete'>Delete</td>
      </tr>
    );
  }
}


export default withRouter(RouteIndexItem);
