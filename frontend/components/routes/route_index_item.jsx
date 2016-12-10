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
    const staticMap = `https://maps.googleapis.com/maps/api/staticmap?size=50x50&path=weight:3%7Ccolor:red%7Cenc:${ route.polyline }&key=AIzaSyA7uwvLREd5yloeRCH3FdgsJvG8D_glP7w`
    return (
      <tr className='route_index_item'>
        <td className='route_map_container' onClick={ this.handleClick }>
          <img src={ staticMap }/>
        </td>
        <td
          className='route_index_item_date'
          onClick={ this.handleClick }>{ route.created_at }</td>
        <td
          className='route_index_item_distance'
          onClick={ this.handleClick }>{ route.distance + " mi"}</td>
        <td
          className='route_index_item_name'
          onClick={ this.handleClick }>{ route.name }</td>
        <td
          className='route_index_item_origin
          onClick={ this.handleClick }'>{ route.origin }</td>
        <td
          onClick={ () => deleteRoute(route.id) }
          className='route_index_item_delete'>Delete</td>
      </tr>
    );
  }
}


export default withRouter(RouteIndexItem);
