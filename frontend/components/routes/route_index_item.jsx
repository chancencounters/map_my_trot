import React from 'react';
import { withRouter } from 'react-router';

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.initMap();
  // }
  //
  // initMap() {
  //   const { route } = this.props;
  //   const coords = JSON.parse(route.bounds);
  //   const bounds = new google.maps.LatLngBounds();
  //   const decodedPath = google.maps.geometry
  //   .encoding
  //   .decodePath(route.polyline);
  //
  //   this.map = new google.maps.Map(this.mapNode, {
  //     center: { lat: coords.north, lng: coords.east },
  //     zoom: 15,
  //     disableDefaultUI: true,
  //   });
  //
  //   const poly = new google.maps.Polyline({
  //     path: decodedPath,
  //     strokeColor: '#fd605f',
  //     strokeOpacity: 1.0,
  //     strokeWeight: 4
  //   });
  //
  //   poly.setMap(this.map);
  //
  //   const path = poly.getPath();
  //   for (let i = 0; i < path.length; i++) {
  //     bounds.extend(path.getAt(i));
  //   }
  //
  //   this.map.fitBounds(bounds);
  //   this.map.setZoom(this.map.getZoom() + 4);
  // }
  handleClick() {
    this.props.router.push(`/route/${id}`);
  }

  render() {
    const { route, deleteRoute } = this.props;
    const staticMap = `https://maps.googleapis.com/maps/api/staticmap?size=50x50&path=weight:3%7Ccolor:red%7Cenc:${ route.polyline }&key=AIzaSyA7uwvLREd5yloeRCH3FdgsJvG8D_glP7w`
    return (
      <tr className='route_index_item' onClick={ this.handleClick }>
        <td className='route_map_container'>
          <img src={ staticMap }/>
        </td>
        <td className='route_index_item_date'>{ route.created_at }</td>
        <td className='route_index_item_distance'>{ route.distance }</td>
        <td className='route_index_item_name'>{ route.name }</td>
        <td className='route_index_item_origin'>{ route.origin }</td>
        <td
          onClick={ () => deleteRoute(route.id) }
          className='route_index_item_delete'>Delete</td>
      </tr>
    );
  }
}


export default withRouter(RouteIndexItem);
