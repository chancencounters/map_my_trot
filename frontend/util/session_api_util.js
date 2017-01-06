export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: '/api/users',
    data: { user }
  });
};

export const patchUser = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: '/api/session',
    data: { user }
  });
};

export const logout = (user) => {
  return $.ajax({
    method: "DELETE",
    url: '/api/session'
  });
};
