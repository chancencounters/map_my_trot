import React from 'react';
import { Link } from 'react-router';
import { asArray } from '../../reducers/selectors';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.renderCommentForm = this.renderCommentForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleClick() {
    this.props.postComment(this.state);
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
          onClick={ this.handleClick }
          value="Post"/>
      </form>
    );
  }

  render() {
    const { commentableObj } = this.props;
    const comments = asArray(commentableObj.comments);
    return (
      <aside className='comments_list_container'>
        <h3>Comments</h3>
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
              </li>
            );}
          )}
        </ul>
        { this.renderCommentForm() }
      </aside>
    );
  }
}

export default Comments;
