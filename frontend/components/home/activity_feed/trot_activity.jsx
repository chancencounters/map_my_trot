import React from 'react';
import ActivityCommentsContainer from '../../comments/activity_comments_container';

class TrotActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleComments: false,
    };
    this.handleMsgClick = this.handleMsgClick.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  handleMsgClick() {
    this.setState({ toggleComments: !this.state.toggleComments });
  }

  renderComments() {
    if (this.state.toggleComments) {
      return (
        <ActivityCommentsContainer activity={ this.props.activity }/>
      );
    }
  }

  render() {
    const { activity } = this.props;
    const { name } = activity.user;

    const staticMap = `https://maps.googleapis.com/maps/api/staticmap?size=286x180&path=weight:3%7Ccolor:red%7Cenc:${ activity.polyline }&key=AIzaSyA7uwvLREd5yloeRCH3FdgsJvG8D_glP7w`;
    return (
      <li className="trot_activity_container group" key="{ activity.id }">
        <div className="trot_activity_avatar">
          <img src={ activity.user.image_url }/>
        </div>
        <div className="trot_activity group">
          <div className="activity_description">
            { name } trotted { activity.distance } miles
          </div>
          <div className="activity_name">{ activity.name }</div>
          <div className="activity_detail">
            <div className="activity_detail_dist_container">
              <div className="road_img"></div>
              <span>DISTANCE</span>
              <div className="activity_detail_dist">
                { activity.distance }
              </div>
              <div>mi</div>
            </div>
            <img className="activity_map" src={ staticMap }/>
          </div>
          <div className="activity_comment_footer">
            <div className="message_icon" onClick={ this.handleMsgClick }/>
          </div>
          <div className="trot_activity_comments">
            { this.renderComments() }
          </div>
        </div>
      </li>
    );
  }
}

export default TrotActivity;
