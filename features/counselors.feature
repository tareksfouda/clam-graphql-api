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
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/moontahoe-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Jason Lengstorf",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/jlengstorf-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Sarah Ronau",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/sarahronau-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Andrew Del Prete",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/andrewdelprete-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Kent C Dodds",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/kentcdodds-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Joe Previte",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/jsjoeio-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Joel Hooks",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/joelhooks-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Eve Porcello",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/eveporcello-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Kyle Shevlin",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/kyleshevlin-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Jen Luker",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/knitcodemonkey-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Jake Dawkins",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/jakedawkins-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Nader Dabit",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/dabit3-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Jon Wong",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/jnwng-thumb.jpg"
        }
      },
      {
        "__typename": "Counselor",
        "name": "Isaac Mann",
        "photo": {
          "__typename": "Photo",
          "thumb": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/mannisaac-thumb.jpg"
        }
      }
    ]}
    ```

    Scenario: Find Counselor By ID Query
    When I send the following operation: 
    ```
    query {
      findCounselorById(id:"moontahoe") {
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
      "id": "moontahoe",
      "name": "Alex Banks",
      "bio": "Alex Banks is the owner and operator of Camp Lambda and an all-around cool guy. One time a camper got bit by a snake, and Alex saved the kid’s life. And, then Alex bit that snake. That's just the kind of guy Alex is.",
      "rank": "ALPHA",
      "twitterHandle": "moontahoe",
      "githubHandle": "moontahoe",
      "photo": {
        "__typename": "Photo",
        "full": "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/moontahoe.jpg"
      }
      }
    }
    ```