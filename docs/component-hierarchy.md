## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**Header**

**Footer**

**Shortcuts**

**Home**
  - Header
  - Shortcuts
  - ActivityFeedContainer
  - DashboardContainer
  - FriendsContainer          
  - Footer

**ActivityFeedContainer**
  - ActivityFeed
    - ActivityIndex
      - Map
      - ActivityIndexItem

**DashboardContainer**
  - Dashboard
    - RecentTrotIndex
      - RecentTrotIndexItem
        - Map
        - CommentsIndex
          - CommentsIndexItem

**FriendsContainer**
  - Friends
    - FriendsIndex
      - FriendsIndexItem

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

**LogTrotContainer**
  - Header
  - LogTrotForm
  - Footer

**FindFriendsContainer**
  - Header
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
|"/home/activity_feed"	| "ActivityContainer" |
|"/home/dashboard"	| "DashboardContainer" |
|"/home/friends" | "FriendsContainer" |
|"/routes" | "RoutesContainer" |
|"/create_route" | "CreateRoute" |
|"/find_friends" | "FindFriends" |
|"/log_trot" | "LogTrotContainer" |
