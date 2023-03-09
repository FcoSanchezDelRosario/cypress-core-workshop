/// <reference types="cypress" />

it('creating a new card', () => {

  cy.intercept('POST','/api/cards')
  .as('createCard')

  cy.visit('/board/1')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')

    cy.wait('@createCard')
    .then(card=>{
      expect(card.request.body.name).to.eq('milk')
    })
  
});

it.only('board has no lists', () => {

  cy.intercept({
    method: 'GET',
    url: /lists/
  }).as('getLists')

  cy.visit('/board/1')

  cy.wait('@getLists')

  cy.get('[data-cy=list]')
    .should('not.exist')
  
});

it('deleting a list', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="delete-list"]')
    .click()

});