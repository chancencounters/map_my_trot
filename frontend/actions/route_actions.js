import * as Util from '../util/route_api_util';
import { receiveRouteErrors } from './error_actions';

export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const DESTROY_ROUTE = "DESTROY_ROUTE";

export const receiveRoute = (route) => {
  return {
    type: RECEIVE_ROUTE,
    route
  };
};

export const destroyRoute = (id) => {
  return {
    type: RECEIVE_ROUTE,
    id
  };
};

export function createRoute(route) {
  return (dispatch) => {
    return Util.createRoute(route).then(
      (currentUser) => dispatch(receiveRoute(route)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
}

export function deleteRoute(id) {
  return (dispatch) => {
    return Util.deleteRoute(id).then(
      (currentUser) => dispatch(deleteRoute(id)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
}
