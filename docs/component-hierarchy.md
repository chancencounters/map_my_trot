## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**Header**

**Footer**

**Shortcuts**

**HomeContainer**
  - Header
  - Shortcuts

  - ActivityFeed
    - ActivityIndex
      - Map
      - ActivityIndexItem
  - Dashboard
    - RecentTrotIndex
      - RecentTrotIndexItem
        - Map
        - CommentsIndex
          - CommentsIndexItem
  - Friends
    - FriendsIndex
      - FriendsIndexItem
  - Footer

**RoutesContainer**
  - Header
  - RouteIndex
    - RouteIndexItem
      - CommentsIndex
        - CommentsIndexItem
  - Footer

**CreateRoute**
  - Header
  - CreateRouteForm
    - Map

**LogTrot**
  - Header
  - LogTrotForm
  - Footer

**FriendsContainer**
  - Header
  - FriendsIndex
    - FriendsIndexItem
  - FindFriends
    - Search
      - SearchResults
  - Footer

## Routes

|Path   | Component   |
|-------|-------------|
|"/"
|"/sign-up"	| "AuthFormContainer" |
|"/sign-in"	| "AuthFormContainer" |
|"/home" | "HomeContainer" |
|"/home/activity_feed"	| "ActivityFeed" |
|"/home/dashboard"	| "Dashboard" |
|"/home/friends" | "Friends" |
|"/routes" | "RoutesContainer" |
|"/create_route" | "CreateRoute" |
|"/find_friends" | "FindFriends" |
|"/logtrot" | "LogTrot" |
