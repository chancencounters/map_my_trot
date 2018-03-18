import React from 'react';
import CommentsContainer from '../comments/comments_container';
import { Link, withRouter } from 'react-router';

class RouteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoute(this.props.params.id).then(
      () => this.initMap());
  }

  initMap() {
    const { route } = this.props;
    const coords = JSON.parse(route.bounds);
    const bounds = new google.maps.LatLngBounds();
    const decodedPath = google.maps.geometry.encoding.decodePath(route.polyline);

    this.map = new google.maps.Map(this.mapNode, {
      center: { lat: coords.north, lng: coords.east },
      zoom: 15,
      disableDefaultUI: true,
    });

    const poly = new google.maps.Polyline({
      path: decodedPath,
      strokeColor: '#fd605f',
      strokeOpacity: 1.0,
      strokeWeight: 4
    });

    poly.setMap(this.map);

    const path = poly.getPath();
    for (let i = 0; i < path.length; i++) {
      bounds.extend(path.getAt(i));
    }

    this.map.fitBounds(bounds);
  }

  handleDelete(id) {
    this.props.deleteRoute(id).then(
      () => this.props.router.push('/routes')
    );
  }

  render() {
    const { route, deleteRoute, currentUser } = this.props;
    const { first_name, last_name } = currentUser;

    return (
      <div className="route_detail_container group">
        <div className="route_detail_main">
          <header className="route_detail_header">
            <Link to="/home">Home</Link>
            <Link to="/routes">My Routes</Link>
            <div>Route Details</div>
          </header>
          <h1>{ route.name }</h1>
          <main className="route_detail_body group">
            <aside className="route_detail_body_aside">
              <div>DISTANCE</div>
              <span>{ route.distance }</span>
              <div>miles</div>
            </aside>
            <main className="route_detail_body_main group">
              <div>
                <span>BEGINS IN:</span>
                <span>CREATED BY:</span>
                <span>DESTINATION:</span>
                <span>TYPE:</span>
              </div>
              <div>
                <div>{ route.origin }</div>
                <div>{ first_name + " " + last_name }</div>
                <div>{ route.destination }</div>
                <div>Trot</div>
              </div>
            </main>
          </main>
          <div id='route_detail_map' ref={ map => this.mapNode = map }/>
        </div>
        <aside className="route_detail_aside">
          <Link to="/create_route" className="create_route_button">
            CREATE A ROUTE
          </Link>
          <Link to="/log_trot" className="log_workout_button">
            LOG THIS WORKOUT
          </Link>
          <button className="delete_route_button"
            onClick={ () => this.handleDelete(route.id) }>DELETE ROUTE
          </button>
        </aside>
        <CommentsContainer route={ route }/>
      </div>
    );
  }
}

export default withRouter(RouteDetail);
