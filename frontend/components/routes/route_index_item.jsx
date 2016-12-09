import React from 'react';

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const { route } = this.props;

    const geocoder = new google.maps.Geocoder();
    const decodedString = google.maps.geometry
    .encoding
    .decodePath(route.polyline);

    geocoder.geocode({ 'address': route.origin }, (results, status) => {
      const center = results[0].geometry.location;
      this.map = new google.maps.Map(this.mapNode, {
        center: center,
        zoom: 14,
        disableDefaultUI: true,
      });

      const poly = new google.maps.Polyline({
        strokeColor: '#fd605f',
        strokeOpacity: 1.0,
        strokeWeight: 4
      });

      poly.setMap(this.map);
      poly.setPath(decodedString);
    });


  }

  render() {
    const { route, deleteRoute } = this.props;

    return (
      <li className='route_index_item'>
        <span className='route_map_container'>
          <div id='route_map' ref={ map => this.mapNode = map }/>
        </span>
        <span className='route_index_item_date'>{ route.created_at }</span>
        <span className='route_index_item_distance'>{ route.distance }</span>
        <span className='route_index_item_name'>{ route.name }</span>
        <span
          onClick={ () => deleteRoute(route.id) }
          className='route_index_item_delete'>Delete</span>
      </li>
    );
  }
}


export default RouteIndexItem;
