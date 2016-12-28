export const fetchActivities = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/activities',
  });
};
