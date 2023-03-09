/// <reference types="cypress" />

Cypress.Commands.add('loginByApi', () => {

  cy.session('loginByApi', () => {

    cy.request('POST', '/api/login', {
      email: 'test@test.com',
      password: '1234Abcd'
    }).then(({ body }) => {
      cy.setCookie('auth_token', body.accessToken)
    })
  })
})

it.only('Logged in user sees private board', () => {

  cy.loginByApi();

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('be.visible')
  
});

it('Opens the private board', () => {

  cy.login()

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .click()

})