const { defineConfig } = require("cypress")
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('..', 'dloadTest/cypress/config', `${file}.json`)
  return fs.readJSON(pathToConfigFile)
}

module.exports = defineConfig({
  $schema: 'https://on.cypress.io/cypress.schema.json',
  chromeWebSecurity: false,
  defaultCommandTimeout: 9000,
  viewportWidth: 1280,
  viewportHeight: 720,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'Relatório',
    reportTitle: 'Relatório',
    reportPageTitle: 'report',
    takePassedScreenshot: false,
    clearOldScreenshots: false,
    shortScrFileNames: false,
    inline: true,
    charts: true,
    autoOpen: true,
    jsonReport: true,
    multiReport: true,
    timestamp: 'dd-mm-yyyy_HH-MM-ss',
    capture: 'runner',
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'dev'
      return getConfigurationByFile(file)
    }
  }
})
