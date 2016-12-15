import React from 'react';
import { Link } from 'react-router';
import { asArray } from '../../reducers/selectors';

class ActivityComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };

    this.renderCommentForm = this.renderCommentForm.bind(this);
    this.handlePostComment = this.handlePostComment.bind(this);
    this.renderCommentsList = this.renderCommentsList.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  componentDidMount() {
    const activatableType = this.props.activity.activatable_type;

    if (activatableType === "Route") {
      this.props.fetchRoute(this.props.activity.id);
    } else if (activatableType === "Trot") {
      this.props.fetchTrot(this.props.activity.id);
    }
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handlePostComment() {
    const activatableType = this.props.activity.activatable_type;
    this.setState({ body: "" });
    
    if (activatableType === "Route") {
      this.props.postRouteComment(this.state, this.props.routeDetail.id);
    } else if (activatableType === "Trot") {
      this.props.postTrotComment(this.state, this.props.trotDetail.id);
    }
  }

  handleDeleteComment(id) {
    this.props.deleteComment(id);
  }

  renderCommentForm() {
    return (
      <form className="post_activity_comment_form">
        <img src={ this.props.currentUser.image_url }/>
        <input type="text"
          placeholder="Post a comment..."
          value={ this.state.body }
          onChange={ (e) => this.handleInput(e) }/>
        <input type="submit"
          onClick={ this.handlePostComment }
          value="Post"/>
      </form>
    );
  }

  renderDeleteButton(id) {
    return (
      <input
        type="submit"
        value="Delete"
        onClick={ () => this.handleDeleteComment(id)
      }></input>
  );
  }

  renderCommentsList() {
    const { routeDetail, trotDetail, currentUser } = this.props;
    const activatableType = this.props.activity.activatable_type;

    let comments = [];
    if (activatableType === "Route") {
      comments = asArray(routeDetail.comments);
    } else if (activatableType === "Trot") {
      comments = asArray(trotDetail.comments);
    }

    return (
      <ul className='activity_comments_list'>
        { comments.map((comment) => {
          const author = comment.author;
          return (
            <li className="activity_comment" key={ comment.id }>
              <img src={ author.image_url }/>
              <div className="activity_comment_details">
                <div className="activity_comment_author_name">{ author.name }</div>
                <div className="activity_comment_body">{ comment.body }</div>
              </div>
              { currentUser.id === comment.author.id ? this.renderDeleteButton(comment.id) : "" }
            </li>
          );}
        )}
      </ul>
    );
  }

  render() {
    return (
      <aside className='activity_comments_list_container'>
        { (Boolean(this.props.routeDetail.comments)) ? this.renderCommentsList() : "" }
        { this.renderCommentForm() }
      </aside>
    );
  }
}

export default ActivityComments;
