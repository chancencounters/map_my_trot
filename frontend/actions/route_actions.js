export const RECEIVE_ROUTE = "RECEIVE_ROUTE";

export const receiveRoute = (route) => {
  return {
    type: RECEIVE_ROUTE,
    route
  };
};
