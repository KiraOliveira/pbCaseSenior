const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      fixturesFolder: false
      // implement node event listeners here
    },
    env: {
      hhideXhr: true
    },
    "baseUrl": 'https://the-internet.herokuapp.com/challenging_dom'
  },
  "video": true,
  "viewportWidth": 1366,
  "viewportHeight": 768,
  "defaultCommandTimeout": 10000,
  "pageLoadTimeout": 60000,
  "failOnStatusCode": false,
  "chromeWebSecurity": false
});

/*
import { allureCypress } from "allure-cypress/reporter";

export default {
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
};
 */