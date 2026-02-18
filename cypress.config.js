const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7vx6cj",
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
