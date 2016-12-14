import React from 'react';
import { Link } from "react-router";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.renderRecentRoutes = this.renderRecentRoutes.bind(this);
    this.renderRecentTrotouts = this.renderRecentTrotouts.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoutes();
    this.props.fetchTrots();
  }

  renderTrotsMessage() {
    if (this.props.trots.length === 0) {
      return (
        <div className="empty_trots_message">
          <p>You have no recent Trots. </p>
        </div>
      );
    }
  }

  renderRoutesMessage() {
    if (this.props.routes.length === 0) {
      return (
        <div className="empty_routes_message">
          <p>You have no recent routes. </p>
        </div>
      );
    }
  }

  renderRecentTrotouts() {
    const { trots } = this.props;
    const recentTrots = trots.slice(trots.length - 3, trots.length);

    return (
      <div className="recent_trotouts_container">
        <header className="recent_trotouts_header">
          <h3>{ "RECENT TROTOUTS" }</h3>
          <Link to="/trots">View All</Link>
        </header>
        <ul className="recent_trotouts_list">
          { recentTrots.map((trot) => {
            const staticMap = `https://maps.googleapis.com/maps/api/staticmap?size=50x50&path=weight:3%7Ccolor:red%7Cenc:${ trot.route.polyline }&key=AIzaSyA7uwvLREd5yloeRCH3FdgsJvG8D_glP7w`;
            return (
              <li className="recent_trotout_item group" key={ trot.id }>
                <img src={ staticMap }/>
                <div className="recent_trotout_name_container">
                  <span className="recent_trotout_name">{ trot.name }</span>
                </div>
                <div className="recent_trotout_activity_date">
                  <span className="recent_trotout_date">{ trot.date }</span>
                  <span>Activity</span>
                  <div className="activity_type_pic"></div>
                </div>
                <div className="recent_trotout_detail_container">
                  <h5>{"DURATION"}</h5>
                  <span>{ trot.duration }</span>
                  <h5>{"DISTANCE"}</h5>
                  <span>{ trot.route.distance } mi</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  renderRecentRoutes() {
    const { routes } = this.props;
    const recentRoutes = routes.slice(routes.length - 4, routes.length);

    return (
      <div className="recent_routes_container">
        <header className="recent_routes_header">
          <h3>{ "RECENT ROUTES" }</h3>
          <Link to="/routes">View All</Link>
        </header>
        <ul className="recent_routes_list">
          { recentRoutes.map((route) => {
            const staticMap = `https://maps.googleapis.com/maps/api/staticmap?size=50x50&path=weight:3%7Ccolor:red%7Cenc:${ route.polyline }&key=AIzaSyA7uwvLREd5yloeRCH3FdgsJvG8D_glP7w`;
            return (
              <li className="recent_routes_item" key={ route.id }>
                <img src={ staticMap }>

                </img>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="dashboard_container">
        { this.renderRecentTrotouts() }
        { this.renderTrotsMessage() }
        { this.renderRecentRoutes() }
        { this.renderRoutesMessage() }
      </div>
    );
  }
}

export default Dashboard;
