const { defineConfig } = require("cypress");

module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://www.amazon.de/',
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
};
