import React from 'react';
import { Link } from 'react-router';
import { asArray } from '../../reducers/selectors';

class RouteActivityComments extends React.Component {
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
    this.props.fetchRoute(this.props.route.id);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handlePostComment() {
    this.setState({ body: "" });
    this.props.postComment(this.state, this.props.routeDetail.id);
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
    const { routeDetail, currentUser } = this.props;
    const comments = asArray(routeDetail.comments);

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

export default RouteActivityComments;
