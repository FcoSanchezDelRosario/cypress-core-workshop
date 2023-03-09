/// <reference types="cypress" />

beforeEach(() => {

  cy.visit('/board/1')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('bread{enter}')

})

it.only('creates a card', () => {
  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')

})

it('has proper number of cards', () => {
  cy.get('[data-cy="card-checkbox"]')
  .check()

  cy.get('[data-cy="card-checkbox"]')
  .should('be.checked')

  cy.get('[data-cy="due-date"]')
  .should('have.class','completed')

})

it('has the checkbox in checked state', () => {

})

it('has correct list name', () => {

})