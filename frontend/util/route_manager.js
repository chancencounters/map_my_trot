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
          this.polyline = response.routes[0].overview_polyline;
          this.distance = response.routes[0].legs[0].distance.text;
          this.origin = response.routes[0].legs[0].start_address;
          this.destination = response.routes[0].legs[0].end_address;
        }
      });
    }
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
