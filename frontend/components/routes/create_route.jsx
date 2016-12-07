import React from 'react';
import { withRouter } from 'react-router';

const _getMapOptions = (pos) => ({
  center: {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude
  },

  zoom: 13
});

let _defaultMapOptions = {
  center: {lat: 37.773972 , lng: -122.431297},
  zoom: 13
};

class CreateRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      search: "",
      map_info: "",
    };
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.map = new google.maps.Map(this.mapNode, _getMapOptions(pos));
      });
    } else {
      this.map = new google.maps.Map(this.mapNode, _defaultMapOptions)
    }
  }

  render() {
    return (
      <div className='create_route_container'>
        <div className='create_route_form_container'>
          <form className='search_loc_form'>
            <input
              type='text'
              value={ this.state.search }
              onChange={ this.update('search') }
              placeholder='Address or Zip/Postal Code'/>
            <input
              type='submit'
              onClick={ this.handleClick }
              placeholder='Search'/>
          </form>
          <form className='create_route_form'>
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
        </div>
          
        <div id='create_route_map' ref={ map => this.mapNode = map }>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateRoute);
