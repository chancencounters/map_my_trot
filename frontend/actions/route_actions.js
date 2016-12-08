import * as Util from '../util/route_api_util';
import { receiveRouteErrors } from './error_actions';

export const RECEIVE_NEW_ROUTE = "RECEIVE_NEW_ROUTE";
export const RECEIVE_SINGLE_ROUTE = "RECEIVE_SINGLE_ROUTE";
export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const CREATE_ROUTE = "CREATE_ROUTE";

export const receiveAllRoutes = () => ({
  type: RECEIVE_ALL_ROUTES,
});

export const receiveSingleRoute = (route) => ({
  type: RECEIVE_SINGLE_ROUTE,
  route
});
export const receiveNewRoute = (route) => ({
  type: RECEIVE_NEW_ROUTE,
  route
});

export const createRoute = (route) => ({
  type: CREATE_ROUTE,
  route
});


export function fetchRoutes() {
  return (dispatch) => {
    return Util.fetchRoutes().then(
      () => dispatch(receiveAllRoutes())
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
      (route) => dispatch(receiveSingleRoute(null)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
}
