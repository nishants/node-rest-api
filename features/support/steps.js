const { Given, When, Then } = require("cucumber");
const expect = require('expect');
const axios = require('axios');

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

  let url = `http://localhost:3000/api/v1/health/set-value${query}`;
  console.log(url)
  await axios.get(url)
});

Given("I should get correct values from store for {string}", async function (key) {
  const {data} = await axios.get('http://localhost:3000/api/v1/health/all-data')
  expect(data[key]).toEqual(this.getTestData()[key]);
});