import * as Util from '../util/route_api_util';
import { receiveRouteErrors } from './error_actions';

export const RECEIVE_NEW_ROUTE = "RECEIVE_NEW_ROUTE";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const REMOVE_ROUTE = "REMOVE_ROUTE";

export const receiveAllRoutes = (routes) => ({
  type: RECEIVE_ALL_ROUTES,
  routes
});

export const receiveRoute = (route) => ({
  type: RECEIVE_ROUTE,
  route
});

export const receiveNewRoute = (route) => ({
  type: RECEIVE_NEW_ROUTE,
  route
});

export const removeRoute = (id) => ({
  type: REMOVE_ROUTE,
  id
});

export function fetchRoutes(data) {
  return (dispatch) => {
    return Util.fetchRoutes(data).then(
      (routes) => dispatch(receiveAllRoutes(routes))
    );
  };
}

export function fetchRoute(id) {
  return (dispatch) => {
    return Util.fetchRoute(id).then(
      (route) => dispatch(receiveRoute(route))
    );
  };
}

export function postRoute(route) {
  return (dispatch) => {
    return Util.postRoute(route).then(
      (currentRoute) => dispatch(receiveNewRoute(currentRoute)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
}

export function deleteRoute(id) {
  return (dispatch) => {
    return Util.deleteRoute(id).then(
      (routeId) => dispatch(removeRoute(routeId)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
}
