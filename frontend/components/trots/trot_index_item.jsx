import React from 'react';
import { withRouter } from 'react-router';

class TrotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.router.push(`/trot/${this.props.trot.id}`);
  }

  render() {
    const { trot } = this.props;

    return (
      <li className="trot_index_item" onClick={ this.handleClick }>
        <div className="trot_index_item_details">
          <div className="trot_index_item_name">{ trot.name }</div>
          <div className="trot_index_item_distance">{ trot.route.distance } mi</div>
          <div className="trot_index_item_duration">{ trot.route.duration }</div>
          <div className="trot_index_item_date">{ trot.date }</div>
        </div>
      </li>
    );
  }
}


export default withRouter(TrotIndexItem);
