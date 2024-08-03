const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // For html reporter
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Fitpeo Automation Tests Report',
    embeddedScreenshots: true,
    overwrite: true,
    inlineAssets: true,
    useImageDiffer: false,
    saveHtml: true,
    html: true,
    json: false
  },
  video: true, // Enable video recording
  e2e: {
    baseUrl:"https://fitpeo.com",
    setupNodeEvents(on, config) {
      mochawesome(on);
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  
});
