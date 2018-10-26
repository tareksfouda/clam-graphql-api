import { When, Then } from 'cucumber'
import { expect } from 'chai'
import { gql } from 'apollo-boost'

let results

When('I send the following operation:', async function(document) {
  results = await this.client.query({ query: gql(document) })
})

Then('I should receive the following data payload:', function(jsonString) {
  let expected = JSON.parse(jsonString)
  expect(results.data).to.deep.equal(expected)
})
