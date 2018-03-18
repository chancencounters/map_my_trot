import React from 'react';

class RouteDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      selectBarVisible: true,
      selectedRouteVisible: false,
      clearButtonVisible: false,
      selectedRouteId: 0,
    };

    this.logThisTrot = this.logThisTrot.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
    this.renderSelectBar = this.renderSelectBar.bind(this);
    this.renderSelectedRoute = this.renderSelectedRoute.bind(this);
    this.renderClearButton = this.renderClearButton.bind(this);
    this.handleSelectClick = this.handleSelectClick.bind(this);
    this.handleRouteClick = this.handleRouteClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    this.setState({ selectedRouteId: this.props.routeDetail.id });
  }

  componentWillReceiveProps() {
    const { routeDetail } = this.props;
    if (Boolean(routeDetail.id)) {
      this.logThisTrot();
    }
  }

  logThisTrot() {
    // Selects Route if coming from route detail page
    const { routeDetail } = this.props;
      this.handleRouteClick(routeDetail.id);
  }

  renderDropdown() {
    const { routesList } = this.props;
    const keys = Object.keys(routesList);
    const newRoutesList = [];
    keys.forEach((key) => {
      newRoutesList.push(routesList[key]);
    });

    return (
      <ul className="route_dropdown_list">
        { newRoutesList.map((route) => {
          const staticMap = `https://maps.googleapis.com/maps/api/staticmap?size=200x200&path=weight:3%7Ccolor:red%7Cenc:${ route.polyline }&key=AIzaSyA7uwvLREd5yloeRCH3FdgsJvG8D_glP7w`
          return (
            <li key={ route.id }
              onClick={ this.handleRouteClick.bind(this, route.id) }>
              <img src={ staticMap }/>
              <div className="map_details">
                <div>{ route.name }</div>
                <span>{ route.distance } mi</span>
              </div>
            </li>
          );
        }
        )}
      </ul>
    );
  }

  renderSelectedRoute() {
    const selectedRoute = this.props.routesList[this.state.selectedRouteId];
    const staticMap = `https://maps.googleapis.com/maps/api/staticmap?size=200x200&path=weight:3%7Ccolor:red%7Cenc:${ selectedRoute.polyline }&key=AIzaSyA7uwvLREd5yloeRCH3FdgsJvG8D_glP7w`

    return (
      <div className="selected_route">
        <img src={ staticMap }/>
        <span>{ selectedRoute.distance } mi</span>
        <div>{ selectedRoute.name }</div>
      </div>
    );
  }

  renderSelectBar() {
    return (
      <div className="selectBar" onClick={ this.handleSelectClick }>
        Select...
      </div>
    );
  }

  renderClearButton() {
    return (
      <button
        className="clear_button"
        onClick={ this.handleClear }>
        X CLEAR ROUTE
      </button>
    );
  }

  handleClear() {
    this.setState({
      dropdownVisible: false,
      selectBarVisible: true,
      selectedRouteVisible: false,
      clearButtonVisible: false,
    });
  }

  handleSelectClick() {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible,
      clearButtonVisible: !this.state.clearButtonVisible,
    });
  }

  handleRouteClick(routeId, context) {
    this.setState({
      selectedRouteId: routeId,
      dropdownVisible: false,
      selectBarVisible: false,
      selectedRouteVisible: true,
      clearButtonVisible: true,
    });
  }

  render() {
    const { routes } = this.props;
    const {
      dropdownVisible, selectBarVisible,
      clearButtonVisible, selectedRouteVisible,
      selectedRouteId,
    } = this.state;

    return (
      <div className="route_dropdown_container group">
        <h2>Route</h2>
        <input type='submit'
          onClick={ () => this.props.handleSubmit(selectedRouteId) }
          value='SAVE'/>
        { selectBarVisible ? this.renderSelectBar() : "" }
        { selectedRouteVisible ? this.renderSelectedRoute() : ""}
        { clearButtonVisible ? this.renderClearButton() : ""}
        { dropdownVisible ? this.renderDropdown() : "" }
      </div>
    );
  }
}

export default RouteDropdown;
