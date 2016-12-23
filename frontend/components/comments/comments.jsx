import React from 'react';
import { Link } from 'react-router';
import { asArray } from '../../reducers/selectors';

class Comments extends React.Component {
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

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handlePostComment() {
    this.setState({ body: "" });
    this.props.postRouteComment(this.state, this.props.route.id);
  }

  handleDeleteComment(id) {
    this.props.deleteComment(id);
  }

  renderCommentForm() {
    return (
      <form className="post_comment_form">
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
    const { route, currentUser } = this.props;
    const comments = asArray(route.comments);

    return (
      <ul className='comments_list'>
        { comments.map((comment) => {
          const author = comment.author;
          return (
            <li className="comment" key={ comment.id }>
              <img src={ author.image_url }/>
              <div className="comment_details">
                <div className="comment_author_name">{ author.name }</div>
                <div className="comment_body">{ comment.body }</div>
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
      <aside className='comments_list_container'>
        <h3>Comments</h3>
        { (Boolean(this.props.route.comments)) ? this.renderCommentsList() : "" }
        { this.renderCommentForm() }
      </aside>
    );
  }
}

export default Comments;
