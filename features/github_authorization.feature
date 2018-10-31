Feature: Github Authorization
    As a Camper
    I want to sign in with Github
    so that I can start building my schedule

    Scenario: Github Auth Link with Client Configured
        When I send the following operation:
        ```
        {
        githubAuthUrl
        }
        ```
        Then I should receive the following data payload:
        ```
        {
        "githubAuthUrl": "https://github.com/login/oauth/authorize?client_id=ABCXYZ&scope=user"
        }
        ```
        And there should be no errors
