import React from 'react';
import TrotIndexItem from './trot_index_item';
import { Link } from 'react-router';

class TrotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrots();
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
              <div>MY TROTOUTS</div>
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
        </div>
      </div>
    );
  }
}

export default TrotIndex;
