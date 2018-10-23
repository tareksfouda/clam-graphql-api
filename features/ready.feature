Feature: Ready
    In order to build a GraphQL API 
    users should be able to send a ready query
    to see that the API is ready for development

    Scenario: Ready query   
    When I send the following operation: 
    ```
    {
        ready
    }
    ```
    Then I should receive the following data payload:
    ```
    {
        "ready": true
    }
    ```