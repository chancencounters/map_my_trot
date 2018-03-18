import React from 'react';
import { Link, withRouter } from 'react-router';

class TrotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrot(this.props.params.id).then(
      () => this.initMap());
  }

  initMap() {
    const { trot } = this.props;
    const coords = JSON.parse(trot.route.bounds);
    const bounds = new google.maps.LatLngBounds();
    const decodedPath = google.maps.geometry.encoding.decodePath(trot.route.polyline);

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
    this.props.deleteTrot(id).then(
      () => this.props.router.push('/trots')
    );
  }

  render() {
    const { trot, deleteTrot, currentUser } = this.props;
    const { first_name, last_name } = currentUser;

    return (
      <div className="trot_detail_container group">
        <div className="trot_detail_main">
          <header className="trot_detail_header">
            <Link to="/home">Home</Link>
            <Link to="/trots">My Trots</Link>
            <div>Trot Details</div>
          </header>
          <h1>{ trot.name }</h1>
          <main className="trot_detail_body group">
            <aside className="trot_detail_body_aside">
              <div>DISTANCE</div>
              <span>{ trot.route.distance }</span>
              <div>miles</div>
            </aside>
            <main className="trot_detail_body_main group">
              <div>
                <span>DATE:</span>
                <span>DURATION:</span>
                <span>DESCRIPTION:</span>
              </div>
              <div>
                <div>{ trot.date }</div>
                <div>{ trot.duration }</div>
                <div>{ trot.description }</div>
              </div>
            </main>
          </main>
          <div id='trot_detail_map' ref={ map => this.mapNode = map }/>
        </div>
        <aside className="trot_detail_aside">
          <Link to="/create_route" className="create_trot_button">
            CREATE A ROUTE</Link>
          <Link to="/log_trot" className="log_workout_button">
            LOG THIS WORKOUT</Link>
          <button className="log_workout_button" onClick={ () => this.handleDelete(trot.id) }>
            DELETE WORKOUT</button>
        </aside>
      </div>
    );
  }
}

export default withRouter(TrotDetail);
