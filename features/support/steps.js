const { Given, When, Then } = require("cucumber");
const expect = require('expect');
const axios = require('axios');
const config = require('config');

const serverConfig = config.get('server');
const apiUrl = () => `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/api/v1`

Given("a variable set to {int}", function(number) {
  this.setTo(number);
});

When("I increment the variable by {int}", function(number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function(number) {
  expect(this.variable).toEqual(number);
});

Given("I set value of {string} as {string} in values", function (key, value) {
  this.setTestData(key, value)
});

Given("I save values to store", async function () {
  const data = this.getTestData();
  let query = "?";

  Object.entries(data).forEach(entry => {
    query += `${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1])}`;
  })

  const url = `${apiUrl()}/health/set-value${query}`;
  await axios.get(url)
});

Given("I should get correct values from store for {string}", async function (key) {
  const {data} = await axios.get(`${apiUrl()}/health/all-data`)
  expect(data[key]).toEqual(this.getTestData()[key]);
});