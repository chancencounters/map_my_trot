import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router';
import Shortcuts from '../shortcuts';
import RouteDropdown from '../routes/route_dropdown';

class LogTrot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route_id: "",
      name: "",
      description: "",
      date: "",
      hours: "",
      minutes: "",
      seconds: "",
      duration: "",
    };

    this._duration = this._duration.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  componentDidMount() {
    this.props.fetchRoutes();
  }

  renderTrotForm() {
    const { errors } = this.props;

    return (
      <form className='log_trot_form'>
        <h1>LOG A TROTOUT</h1>
        <div className="log_trot_description_container group">
          <div className="dumbbell_img"></div>
          <div className="log_trot_description">
            If you've been active, get credit for it! Add your trot
            details below, and stay on top of your trotting goals.
          </div>
        </div>
        <div className="log_trot_form">
          <div className="log_trot_form_row group">
            <div className="log_trot_form_row_name">
              <span>Trot name</span>
              <input
                type='text'
                value={ this.state.name }
                onChange={ this.update('name') }
              />
            { (Boolean(errors.name)) ? "Name " + errors.name[0] : "" }
            </div>
            <div className="log_trot_form_row_date group">
              <label>
                <span>Date</span>
                <div className="date_container">
                  <input type='date'
                    value={ this.state.date }
                    onChange={ this.update('date') }
                    />
                  <div className="calendar_blue_img"></div>
                </div>
              </label>
              { (Boolean(errors.date)) ? "Date " + errors.date[0] : ""}
            </div>
          </div>

          <div className="duration_row group">
            <div>Duration</div>
            <input type='number'
              value={ this.state.hours }
              onChange={ this.update('hours') }
              min="0" max="999" placeholder="hh"
              />
            <span> : </span>
            <input type='number'
              value={ this.state.minutes }
              onChange={ this.update('minutes') }
              min="0" max="59" placeholder="mm"
              />
            <span> : </span>
            <input type='number'
              value={ this.state.seconds }
              onChange={ this.update('seconds') }
              min="0" max="59" placeholder="ss"
              />
          </div>

          <div className="description_row">
            <div>How did it go?</div>
            <textarea
              value={ this.state.description }
              onChange={ this.update('description') }
              placeholder='Describe your trot'
            />

            { (Boolean(errors.description)) ? "Description " + errors.description[0] : "" }
          </div>
        </div>
      </form>
    );
  }

  _duration() {
    let { hours, minutes, seconds } = this.state;
    hours === "" ? hours = "00" : ""
    minutes === "" ? minutes = "00" : ""
    seconds === "" ? seconds = "00" : ""
    return hours + ":" + minutes + ":" + seconds;
  }

  handleSubmit(routeId) {
    this.setState({ route_id: routeId, duration: this._duration()},
      () => this.props.postTrot(this.state)
        .then(() => this.props.router.push("/routes"))
        .then(() => this.props.clearErrors())
    );


  }

  render() {
    return (
      <div className='log_trot_container'>
        <Shortcuts />
        <div className='log_trot_form_container group'>
          { this.renderTrotForm() }
          <RouteDropdown
            routesList={ this.props.routesList }
            routeDetail={ this.props.routeDetail }
            handleSubmit={ this.handleSubmit }/>
        </div>
      </div>
    );
  }
}

export default withRouter(LogTrot);
