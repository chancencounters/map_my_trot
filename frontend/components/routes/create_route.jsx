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
      distance: "",
      origin: "",
      destination: "",
      polyline: "",
      bounds: {},
      search: "",
      trot: {
        routeId: "",
        description: "",
        date: "",
        hours: "",
        minutes: "",
        seconds: "",
      }
    };

    this.initMap = this.initMap.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRouteSubmit = this.handleRouteSubmit.bind(this);
    this.handleTrotSubmit = this.handleTrotSubmit.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  updateTrot(field) {
    return e => this.setState({
			trot: {
        [field]: e.currentTarget.value
      }
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

    document.getElementById('datePicker').value = new Date().toDateInputValue();
  }

  initMap(mapOptions) {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      map: this.map,
      suppressMarkers: true,
    });
    this.RouteManager = new RouteManager(
      this.directionsDisplay,
      this.directionsService,
      this.map
    );

    this.map.addListener('click', (e) => {
      this.RouteManager.renderRoute(e.latLng);
      const bounds = JSON.stringify(this.map.getBounds());
      this.setState({bounds: bounds});
    });
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
          onClick={ this.handleRouteSubmit }
          value='Save Route'/>
      </form>
    );
  }

  createLogTrotForm() {
    return (
      <form className='log_trot_form'>
        <h2>Log as a Trot</h2>
        <input
          type='text'
          value={ this.state.description }
          onChange={ this.updateTrot('description') }
          placeholder='Describe your trot'
        />
        <input type='number'
          value={ this.updateTrot('hours') }
          onChange={ this.updateTrot('hours') }
          min="0" max="999"
          placeholder="hh"
        />
        <input type='number'
          value={ this.updateTrot('minutes') }
          onChange={ this.updateTrot('minutes') }
          min="0" max="59"
          placeholder="mm"
        />
        <input type='number'
          value={ this.updateTrot('seconds') }
          onChange={ this.updateTrot('seconds') }
          min="0" max="59"
          placeholder="ss"
        />
        <input id="datePicker" type='date'
          value={ this.updateTrot('date') }
          onChange={ this.updateTrot('date') }
        />
        <input type='submit'
          onClick={ this.handleTrotSubmit }
          value='Save Route'/>
      </form>
    );
  }

  handleTrotSubmit() {
    this.setState(
      { routeId: this.props.routeId },
      () => this.props.postRoute(this.state)
        .then(() => this.props.postTrot(this.state.trot))
        .then(() => this.props.fetchRoutes())
        .then(() => this.props.router.push("/routes"))
    );

    this.props.clearErrors();
  }

  handleSearch() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': this.state.search}, (results, status) =>
      this.map.setCenter(results[0].geometry.location)
    );

    this.setState( {search: ""} );
    this.props.clearErrors();
  }

  handleRouteSubmit() {
    this.setState(
      this.RouteManager.getRouteInfo(),
      () => this.props.postRoute(this.state)
        .then(() => this.props.fetchRoutes())
        .then(() => this.props.router.push("/routes"))
    );

    this.props.clearErrors();
  }

  render() {
    return (
      <div className='create_route_container'>
        <div className='create_route_forms_container'>
          { this.searchLocForm() }
          { this.createRouteForm() }
          { this.createLogTrotForm() }
        </div>

        <div id='create_route_map' ref={ map => this.mapNode = map }/>
      </div>
    );
  }
}

export default withRouter(CreateRoute);
