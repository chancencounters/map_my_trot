import React from 'react';
import ActivityCommentsContainer from '../../comments/activity_comments_container';
import { asArray } from '../../../reducers/selectors';
import moment from 'moment';

class RouteActivity extends React.Component {
  constructor(props) {
    super(props);

    this.renderComments = this.renderComments.bind(this);
  }

  renderComments() {
    if (this.props.selected) {
      return (
        <ActivityCommentsContainer
          activity={ this.props.activity }
          handlePostComment={ this.props.handlePostComment }/>
      );
    }
  }

  render() {
    const { activity } = this.props;
    const { first_name, last_name } = activity.user;
    const { route } = activity;
    let comments = [];
    if (Boolean(activity.route.comments)) {
      comments  = activity.route.comments;
    }

    const userName = first_name + " " + last_name;
    const staticMap = `https://maps.googleapis.com/maps/api/staticmap?size=286x180&path=weight:3%7Ccolor:red%7Cenc:${ route.polyline }&key=AIzaSyA7uwvLREd5yloeRCH3FdgsJvG8D_glP7w`;
    return (
      <li className="route_activity_container group" key="{ activity.id }">
        <div className="route_activity_avatar">
          <img src={ activity.user.image_url }/>
        </div>
        <div className="route_activity group">
          <div className="activity_description">
            { userName } created the route { route.name }
          </div>
          <div className="activity_detail">
            <img className="activity_map" src={ staticMap }/>
            <div className="activity_detail_dist_container">
              <div className="road_img"></div>
              <span>DISTANCE</span>
              <div className="activity_detail_dist">
                { route.distance }
              </div>
              <div>mi</div>
            </div>
          </div>
          <div className="activity_comment_footer">
            <div className="activity_time">Posted { moment(activity.created_at).format("MMMM Do YYYY, h:mm:ss a") }</div>
            <div className="message_icon" onClick={ () => this.props.onClick(activity.id) }/>
            <div className="num_of_comments">{ asArray(comments).length }</div>
          </div>
          <div className="activity_comments">
            { this.renderComments() }
          </div>
        </div>
      </li>
    );
  }
}

export default RouteActivity;
