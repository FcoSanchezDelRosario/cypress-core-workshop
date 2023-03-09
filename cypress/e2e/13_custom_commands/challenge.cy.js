/// <reference types="cypress" />

// challenge #1: create three new custom commands. one for creating new board
// one for creating new list and one for creating new card
// and use them in test

Cypress.Commands.add('addBoard',(boardName)=>{
  cy.dataCy('first-board').type(`${boardName}{enter}`)
  //cy.get('[data-cy=first-board]').type(`${boardName}{enter}`)
})

Cypress.Commands.add('addList',(listName)=>{
  cy.dataCy('add-list-input').type(`${listName}{enter}`)
  //cy.get('[data-cy=add-list-input]').type(`${listName}{enter}`)
})

Cypress.Commands.add('addCard',(cardName)=>{
  cy.dataCy('new-card').click()
  cy.dataCy('new-card-input').type(`${cardName}{enter}`)
  //cy.get('[data-cy=new-card]').click()
  //cy.get('[data-cy=new-card-input]').type(`${cardName}{enter}`)
})

beforeEach(()=>{

  cy.request('POST', '/api/reset')
  
  cy.visit('/')
})

it('creates new board, list and card', () => {

 
   cy.addBoard('new board')
   cy.addList('new list')
   cy.addCard('new card')
  
});