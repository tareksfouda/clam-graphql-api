<p align="center"><img src="https://i.imgur.com/vwbbaoN.png" width="100" /></p>

# Camp Lambda GraphQL API

## Overview

The Camp Lambda Activity Manager, or CLAM, is a real camper activity manager for
a fake summer camp. The purpose of the CLAM is to teach developers how to build
full stack applications with GraphQL, Apollo, and React. In this repository,
you'll find everything you need to work with the GraphQL API.

Looking to check out the front end of this application? Visit the
[Camp Lambda UI](https://github.com/MoonHighway/clam-ui) project.

## Installation

1. Clone or download this repository.

```
git clone https://github.com/moonhighway/clam-graphql-api.git
cd clam-graphql-api
```

2. Install the dependencies

```
npm install
```

Or use yarn:

```
yarn
```

3. Add a `.env` file to the root of your project. You will need to add the
   provided `GRAPHQL_ENDPOINT` and `GRAPHQL_SUBSCRIPTIONS_ENDPOINT` variables,
   but the `ENGINE_API_KEY` is optional. If you have not set up your
   [Apollo Engine](https://www.apollographql.com/engine) account, do not include
   this variable:

```
ENGINE_API_KEY=<YOUR_ENGINE_API KEY:OPTIONAL>
GRAPHQL_ENDPOINT=http://localhost:4000
GRAPHQL_SUBSCRIPTIONS_ENDPOINT=ws://localhost:4000/graphql
```

## Starting the Project - Dev Mode

Run the following command: `npm install dev:start`.

## Running Tests

This project is set up with tests that can be executed with the following npm
commands:

| Command                   | Description                          |
| ------------------------- | ------------------------------------ |
| `npm run test`            | Runs all tests + prettier            |
| `npm run test:functional` | Runs cucumber tests                  |
| `npm run dev:test`        | Runs Jest tests with a watch command |
| `npm run dev:coverage`    | Runs test coverage report            |

This project was created by [Alex Banks](http://twitter.com/moontahoe) and
[Eve Porcello](http://twitter.com/eveporcello) from
[Moon Highway](https://www.moonhighway.com).
