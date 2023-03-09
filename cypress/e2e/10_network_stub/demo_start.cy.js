/// <reference types="cypress" />

it('loads a list of boards from fixture', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  },{
    fixture: 'twoBoards.json'
  })
    .as('boardList')

  cy.visit('/');

})

it('shows an error message when creating a board', () => {

  cy.intercept({
    method: 'POST', 
    url:'/api/boards'
  },{
    statusCode: 500
  })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')

})

it.only('reloads boards when it’s taking too long', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards',
    times: 1
  },(req)=> {
      req.reply((res)=>{
        res.delay = 10000
      })
  })
    .as('boards')

  cy.visit('/')

  cy.contains('Reload')
  .click()

  cy.get('[data-cy=board-item]').should('be.visible')
  
});