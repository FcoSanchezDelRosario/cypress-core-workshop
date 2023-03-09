const { defineConfig } = require('cypress')
const { registerWorkshopScripts } = require('./workshop-scripts/workshopScripts.js')
const {seedDatabase} =  require ('./cypress/scripts/seedDatabase')
const {clearDatabase} = require ('./cypress/scripts/clearDatabase')

module.exports = defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on, config) {
      registerWorkshopScripts(on)
      on('task',{seedDatabase, clearDatabase})
    },
    baseUrl: 'http://localhost:3000'
  },
})
 