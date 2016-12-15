import React from 'react';
import RouteActivity from './route_activity';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.renderActivity = this.renderActivity.bind(this);
  }

  componentDidMount() {
    this.props.fetchActivities();
  }

  renderActivity(activity) {
    if (activity.activatable_type === "Route") {
      return (
        <RouteActivity activity={ activity }/>
      );
    } else if (activity.activatable_type === "Trot") {
      return (
        <li className="activity" key={ activity.id }>

        </li>
      );
    } else {
      return (
        <li className="activity" key={ activity.id }>

        </li>
      );
    }
  }


  render() {
    const { activities } = this.props;
    return (
      <div className="activity_feed_container">
        <ul className="activity_feed">
          { activities.map((activity) => {
          return (
            this.renderActivity(activity)
          );
        })}
        </ul>
      </div>
    );
  }
}

export default ActivityFeed;
