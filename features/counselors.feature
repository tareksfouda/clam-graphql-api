Feature: Counselors
    In order to deliver counselor data to the client
    client should be able to query information about counselors

    Scenario: Counselor Totals
    When I send the following operation:
    ```
    query {
      totalCounselors
      alpha:totalCounselors(rank: ALPHA)
      beta:totalCounselors(rank: BETA)
      release:totalCounselors(rank: RELEASE_CANDIDATE)
    }
    ```
    Then I should receive the following data payload:
    ```
    {
      "totalCounselors": 14,
      "alpha": 5,
      "beta": 4,
      "release": 5
    }
    ```

    Scenario: Counselor names
    When I send the following operation: 
    ```
    query {
      allCounselors {
        name
        photo {
          thumb
        }
      }
    }
    ```
    Then I should receive the following data payload:
    ```
    {
    "allCounselors": [
      {
        "__typename": "Counselor",
        "name": "Alex Banks",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/alex-banks-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Jason Lengstorf",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/jason-lengstorf-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Sarah Ronau",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/sarah-ronau-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Andrew Del Prete",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/andrew-del-prete-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Kent C Dodds",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/kent-c-dodds-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Joe Previte",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/joe-previte-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Joel Hooks",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/joel-hooks-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Eve Porcello",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/eve-porcello-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Kyle Shevlin",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/kyle-shevlin-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Jen Luker",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/jen-luker-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Jake Dawkins",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/jake-dawkins-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Nader Dabit",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/nader-dabit-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Jon Wong",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/jon-wong-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Isaac Mann",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/isaac-mann-thumb.jpg"
        }
      }
    ]}
    ```

    Scenario: Find Counselor By ID Query
    When I send the following operation: 
    ```
    query {
      findCounselorById(id:"1") {
        id
        name
        bio
        rank
        twitterHandle
        githubHandle
        photo {
          full
        }
      }
    }
    ```
    Then I should receive the following data payload:
    ```
    { 
      "findCounselorById": {
        "__typename": "Counselor",
        "id": "1",
        "name": "Alex Banks",
        "bio": "Alex Banks is the owner and operator of Camp Lambda and an all-around cool guy. One time a camper got bit by a snake, and Alex saved the kid’s life. And, then Alex bit that snake. That's just the kind of guy Alex is.",
        "rank": "ALPHA",
        "twitterHandle": "@moontahoe",
        "githubHandle": "@moontahoe",
        "photo": {
          "__typename": "Photo",
          "full": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/alex-banks.jpg"
        }
    }}
    ```