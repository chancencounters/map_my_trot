import React from 'react';
import RouteActivity from './route_activity';
import TrotActivity from './trot_activity';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
    };
    this.onClick = this.onClick.bind(this);
    this.handlePostComment = this.handlePostComment.bind(this);
    this.renderActivity = this.renderActivity.bind(this);
  }

  componentDidMount() {
    this.props.fetchActivities();
  }

  renderActivity(activity, idx) {
    if (activity.activatable_type === "Route") {
      return (
        <RouteActivity
          activity={ activity }
          key={ idx }
          selected={ this.state.selectedId === activity.id }
          onClick={ this.onClick }
          handlePostComment={ this.handlePostComment }/>
      );
    } else if (activity.activatable_type === "Trot") {
      return (
        <TrotActivity activity={ activity }
          key={ idx }
          selected={ this.state.selectedId === activity.id }
          onClick={ this.onClick }
          handlePostComment={ this.handlePostComment }/>
      );
    } else {
      return (
        <li className="activity" key={ idx }>

        </li>
      );
    }
  }

  handlePostComment(comment) {
    const activity = this.selectActivity();
    const activatableType = activity.activatable_type;

    if (activatableType === "Route") {
      const routeOrTrotId = activity.route.id;
      this.props.postRouteComment(comment, routeOrTrotId );
    } else if (activatableType === "Trot") {
      const routeOrTrotId = activity.trot.id;
      this.props.postTrotComment(comment, routeOrTrotId);
    }
  }

  selectActivity() {
    const { activities } = this.props;

    for (let i = 0; i < activities.length; i++) {
      let activity = activities[i];
      if (activity.id === this.state.selectedId) {
        return activity;
      }
    }
  }

  onClick(id) {
    if (this.state.selectedId === id) {
      this.setState({ selectedId: null});
    } else {
      this.setState({ selectedId: id});
    }
  }

  render() {
    const { activities } = this.props;

    return (
      <div className="activity_feed_container">
        <ul className="activity_feed">
          { activities.map((activity, idx) => {
          return (
            this.renderActivity(activity, idx)
          );
        })}
        </ul>
      </div>
    );
  }
}

export default ActivityFeed;
