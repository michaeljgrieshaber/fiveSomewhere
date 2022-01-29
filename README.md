# fiveSomewhere

[Github](https://github.com/michaeljgrieshaber/fiveSomewhere)

## Overview

This site allows users to finally answer the question nobody is asking in response to the statement "It's 5 O'Clock somewhere". Once on the site, users will be able to see where exactly it's 5 O'Clock in the world by country & timezone. They will also see their time, timezone, and be able to listen to a classic song.

### Libraries & Dependencies

| Library       | Description                                            |
| ------------- | ------------------------------------------------------ |
| React         | Front end framework                                    |
| Axios         | Make requests to the server from front end             |
| cors-anywhere | Allowed proxy when making the API call                 |
| TimezoneDB    | API used to get all of the timezones at 5PM            |
| Worldtime API | API used to get the users timezone based on IP address |

### Client (Front End)

[Wireframe](https://www.figma.com/file/V9sTReyTrfm39K95P4i8lb/P4-Blog?node-id=1%3A3)

[Compnent Tree](https://whimsical.com/conspiracy-theories-S9YsJEfJTjs53WcNf2kNhx)

Component Architecture

```
src
|__ Services/
      |__ apiConfig.js
|__ Components/
      |__ Layout
          |__ layout.css
          |__ layout.jsx
      |__ MainContainer.jsx
      |__ Logout.jsx
|__ Screens/
      |__ Landing
          |__ landing.jsx
          |__ landing.css
      |__ Listing
          |__ listing.jsx
          |__ listing.css
      |__ Register
          |__ register.jsx
          |__ register.css
      |__ Login
          |__ login.jsx
          |__ login.css
      |__ TheoryView
          |__ TheoryView.jsx
          |__ TheoryView.css
      |__ CreateTheory
          |__ createTheory.jsx
          |__ CreateTheory.css

```

Time Estimtates
| Day | Deliverable | Status |
| --------- | --------------------------- | ---------- |
| 11/01/21 | Work on README/pitch | complete |
| 11/02/21 | Get approved, Code backend | complete |
| 11/03/21 | Code backend, Code frontend | complete |
| 11/04/21 | Code frontend | complete |
| 11/05/21 | Code frontend/CSS | complete |
| 11/06/21 | CSS | complete |
| 11/07/21 | CSS | complete |
| 11/08/21 | Present | complete |
| 11/08/21+ | Post MVP | incomplete |

| Component            | Priority | Estimated Time | Time Invested |
| -------------------- | :------: | :------------: | :-----------: |
| Setting up back end  |    H     |      3hrs      |       ?       |
| Models               |    M     |      3hrs      |       ?       |
| User Authentication  |    H     |      6hrs      |       ?       |
| Routes/Controller    |    H     |      6hrs      |       ?       |
| Setting up front end |    H     |      3hrs      |       ?       |
| Screens & routes     |    H     |      3hrs      |       ?       |
| Forms                |    H     |      6hrs      |       ?       |
| Axios calls          |    H     |      3hrs      |       ?       |
| Display logic        |    L     |      3hrs      |       ?       |
| CSS                  |    L     |      6hrs      |       ?       |
| Total                |    H     |     42hrs      |       ?       |

### Server (Backend)

![ERD](ERD.png)

## Post MVP

1. Add a counter to each theory so the listing page shows how many comments it has

## Code Showcase

```

```

## Code Issues & Resolutions

```

```
