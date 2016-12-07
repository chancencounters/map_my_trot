import React from 'react';
import { withRouter } from 'react-router';
import RouteManager from '../../util/route_manager';

const _getMapOptions = (pos) => ({
  center: {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude
  },

  zoom: 17
});

let _defaultMapOptions = {
  center: {lat: 37.773972 , lng: -122.431297},
  zoom: 17
};

class CreateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      map_info: "",
      search: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.initMap(_getMapOptions(pos));
      });
    } else {
      this.initMap(_defaultMapOptions);
    }
  }

  initMap(mapOptions) {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      map: this.map,
      suppressMarkers: true,
    });
    this.RouteManager = new RouteManager(this.directionsDisplay, this.directionsService, this.map);
    this.map.addListener('click', (e) => {
      this.RouteManager.renderRoute(e.latLng);
    });
    }

  handleSearch() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': this.state.search}, (results, status) =>
      this.map.setCenter(results[0].geometry.location)
    );

    this.setState( {search: ""} );
  }

  searchLocForm() {
    return (
      <form className='search_loc_form'>
        <h3>Choose a map location</h3>
        <input
          type='text'
          value={ this.state.search }
          onChange={ this.update('search') }
          placeholder='Address or Zip/Postal Code'/>
        <input
          type='submit'
          onClick={ this.handleSearch }
          value='Search'/>
      </form>
    );
  }

  createRouteForm() {
    return (
      <form className='create_route_form'>
        <h2>Route Details</h2>
        <input
          type='text'
          value={ this.state.name }
          onChange={ this.update('name') }
          placeholder='Name this map'
          />
        <input type='submit'
          onClick={ this.handleSubmit }
          value='Save Route'/>
      </form>
    );
  }

  render() {
    return (
      <div className='create_route_container'>
        <div className='create_route_forms_container'>
          { this.searchLocForm() }
          { this.createRouteForm() }
        </div>

        <div id='create_route_map' ref={ map => this.mapNode = map }>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateRoute);
