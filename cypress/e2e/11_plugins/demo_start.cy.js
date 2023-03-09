/// <reference types="cypress" />

it('api testing 1', () => {

  cy.api('POST','/api/boards',{
    name: 'hello word'
  })

  cy.api('PATCH','/api/boards/1',{
    starred: true
  })

  cy.api('DELETE','/api/boards/1')
})

it('api testing 2',{env: {requestMode: true}}, () => {

    cy.request('POST','/api/boards',{
      name: 'hello word'
    })
  
    cy.request('PATCH','/api/boards/1',{
      starred: true
    })
  
    cy.request('DELETE','/api/boards/1')

  
  });