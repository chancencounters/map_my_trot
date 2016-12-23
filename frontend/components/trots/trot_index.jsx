import React from 'react';
import TrotIndexItem from './trot_index_item';
import { Link } from 'react-router';

class TrotIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderMessage = this.renderMessage.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrots();
  }

  renderMessage() {
    if (this.props.trots.length === 0) {
      return (
        <div className="empty_trots_message">
          <h5>Welcome to Your Trotout Dashboard.</h5>
          <p>Here, you can monitor your progress, plan your trotting,
            and view stats on how you're doing.
            To get started, log your first trotout. </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="trot_index_container">
        <div className="trot_index_inner">
          <header className="trot_index_header">
            <div className="trot_index_menu group">
              <Link to="/home">Home</Link>
              <span>My Trotouts</span>
            </div>
            <div className="trot_index_title">
              <div>MY WORKOUTS</div>
              <Link to="/log_trot">LOG A WORKOUT</Link>
            </div>
          </header>
          <ul className="trot_index">
            { this.props.trots.map((trot) => {
              return (
              <TrotIndexItem
                key={ trot.id }
                trot= { trot }/>
            );})}
          </ul>
          { this.renderMessage() }
        </div>
      </div>
    );
  }
}

export default TrotIndex;
