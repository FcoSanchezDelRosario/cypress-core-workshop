/// <reference types="cypress" />

const data1 = require('../../fixtures/testData.json')
const data2= require('../../fixtures/threeBoards.json')

it('setting up the database', () => {

  cy.task('seedDatabase',data1)

  cy.visit(`/`)

  cy.task('clearDatabase')

  cy.visit(`/`)

});