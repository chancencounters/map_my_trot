import React from 'react';
import RouteActivity from './route_activity';
import TrotActivity from './trot_activity';
import Infinite from 'react-infinite';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      imageFile: null,
      limit: 1,
      infiniteLoading: false,
      initialLoad: true,
    };
    this.onClick = this.onClick.bind(this);
    this.handlePostComment = this.handlePostComment.bind(this)
    this.renderActivity = this.renderActivity.bind(this);
    this.renderMsg = this.renderMsg.bind(this);
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ initialLoad: false })
    }, 1000)
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
      if (activity.id === this.state.selectedId) return activity;
    }
  }

  onClick(id) {
    if (this.state.selectedId === id) {
      this.setState({ selectedId: null});
    } else {
      this.setState({ selectedId: id});
    }
  }

  handleInfiniteLoad() {
    if (!this.state.infiniteLoading) {
      this.setState({ infiniteLoading: true });

      this.props.fetchActivities(this.state.limit + 1)
      setTimeout(() => {
          this.setState({ limit: this.state.limit + 1, infiniteLoading: false })
      }, 100)
    }
  }

  renderMsg() {
    if (this.props.activities.length === 0 && !this.state.initialLoad) {
      return (
        <div className="no_activities_message">
          <p>You have no recent activity. Start adding friends, creating routes
            and logging your activity!
          </p>
        </div>
      )
    }
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
    }
  }

  render() {
    const { activities, currentUser } = this.props;

    return (
      <div className="activity_feed_container">
        <Infinite className="activity_feed"
          elementHeight={290}
          useWindowAsScrollContainer
          onInfiniteLoad={this.handleInfiniteLoad}
          infiniteLoadBeginEdgeOffset={-200}
          timeScrollStateLastsForAfterUserScrolls={0}
          >
          { activities.map((activity, idx) => {
            return (this.renderActivity(activity, idx));
          })}
        </Infinite>
        { this.renderMsg() };
      </div>
    );
  }
}

export default ActivityFeed;
