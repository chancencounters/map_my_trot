export default class RouteManager {
  constructor(directionsDisplay, directionsService, map) {
    this.directionsDisplay = directionsDisplay;
    this.directionsService = directionsService;
    this.map = map;
    this.markerArray = [];

    this.renderRoute = this.renderRoute.bind(this);
    this._createMarker = this._createMarker.bind(this);
    this._createWaypoints = this._createWaypoints.bind(this);
  }

  renderRoute(pos) {
    this._createMarker(pos);

    if (this.markerArray.length > 1) {
      const waypoints = this._createWaypoints();
      this.directionsService.route({
        origin: this.markerArray[0].position,
        destination: this.markerArray[this.markerArray.length - 1].position,
        optimizeWaypoints: true,
        waypoints: waypoints,
        travelMode: 'WALKING'
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);

          const route = response.routes[0];
          const dist = route.legs[0].distance.value;
          this.polyline = route.overview_polyline;
          this.distance = this._convertMeterToMiles(dist);
          this.origin = route.legs[0].start_address;
          this.destination = route.legs[0].end_address;
        }
      });
    }
  }

  _convertMeterToMiles(meters) {
    return (Math.round((meters * 0.000621371) * 100)) / 100;
  }

  getRouteInfo() {
    return ({
      polyline: this.polyline,
      distance: this.distance,
      origin: this.origin,
      destination: this.destination,
    });
  }

  _createMarker(pos) {
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
    });
    this.markerArray.push(marker);
  }

  _createWaypoints() {
    // Create waypoint objects by removing the origin and destination
    const markerWaypoints = this.markerArray.slice(1, this.markerArray.length - 1);
    return markerWaypoints.map((marker) => {
      const lat = marker.position.lat();
      const lng = marker.position.lng();
      return {
        location: new google.maps.LatLng(lat, lng),
        stopover: true
      };
    });
  }
}
