{
  currentUser: {
    id: 1,
    email: "zack.yu2@gmail.com",
    firstName: "Zack",
    lastName: "Yu",
  },
  forms: {
    logIn: { errors: [] },
    signUp: { errors: [] },
    createTrots: { errors: [] },
    createRoutes: { errors: []},
  }
  routes: {
    1: {
      name: "NewYork to China",
      description: "Vacay.",
      distance: "1000 mi",
      author_id: 1,
      map_info: "",
      comments: {
        1: {
          author_id: 1,
          routes_id: 1,
          body: "Sick route!",
        }
      }
    }
  },
  trots: {
    1: {
      title: "A Vacation Trip to Toronto and Vancouver",
      description: "",
      distance: "1 mi",
      date: "01/29/2016",
      time: "49 mins",
      author_id: 1,
      map_info: "",
      comments: {
        2: {
          author_id: 1,
          trots_id: 1,
          body: "Sick trot!",
        }
      }
    }
  },
}
