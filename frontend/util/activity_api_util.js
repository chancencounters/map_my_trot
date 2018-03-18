export const fetchActivities = (limit) => {
  return $.ajax({
    method: 'GET',
    url: '/api/activities',
    data: { limit }
  });
};
