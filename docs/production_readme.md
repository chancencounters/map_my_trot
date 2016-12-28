# FresherNote

[MapMyTrot live][https://mapmytrot.herokuapp.com/#/]

MapMyTrot is a full-stack web application inspired by MapMyRun.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Creating and Rendering Routes/Trots

  Utilizing google maps api, I render a map and attach a click event listener in the `CreateRoutes` component. The event listener will call my `RouteManager` subcomponent to render a marker. Googles direction services will then render polyline that can be chained multiple times, to create a route.

  There are three forms in the `CreateRoutes` components. One for searching location on the map that uses geocoder to recenter the map. The second one is used to save a route once a route has been set and the last one is to save a route along with a trot.

  The route is stored in the database under a routes table that contains columns `id`,
  `user_id`, `name`, `distance`, `polyline`, `origin`, `bounds`, and `destination`. The encoded `polyline` is used to render a google static map in my `RouteIndex` and `TrotIndex` components. For my `RouteDetail` component, I use the `bounds` data to rerender a google map.

  In the `RouteIndex` component I have a list of all my routes. When you click on an individual route, it takes you to the route page that renders the `RouteDetail` component for that specific route. Here you can click on the log this trotout button to render the log trot page, where you can create a trot.

### Friending

  On the database side, I have a joint table `friendships`. It has columns for `user_id`, `friend_id` and `status`. The user_id references which user requested the friendship, which I use to filter for requested friendships in my `FriendRequests` component. In the `MyFriends` component, I fetch the current users friend using a custom GET route that filters users through the joint table. My `FindFriends` component fetches users and then filters the users using the search value based on first name, last name and email.

### Dashboard/Activity Feed

  For my dashboard, it is a pull of the users three most recent routes and four most recent trots. The activity feed fetches all the activities of the current users friend organized by time created, including the user.

  On the backend, I have an `activity` joint table that has columns for `user_id`, `activatable_id`, and `activatable_type`. They are associated with routes and  trots. When routes/trots are created, an activity is created as well. I have a custom GET route for fetching activities. The activities route serves back the activity with its comments and users nested beneath.

### Comments

  On my activity feed page, you can click on each activity to render a comment form and all comments associated with that activity. There is a `Comments` component that renders the comments form and list. My `ActivityComments` and `RouteDetail` component utilizes the `Comments` component in the activity feed. You can delete comments only if you are the author.

  On the backend, my comments table is polymorphic aptly named `commentable`. It has columns for `user_id`, `body`, `commentable_id` and `commentable_type`. Both routes and trots have many comments.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for MapMyTrot are outlined below.

### Direct Messaging

I plan on allowing users to DM each other to really make it a social media site.

### Route Genius

I'm not sure how to implement this yet, but I plan to have an option where a user enters an address and route genius will find a suitable route.
