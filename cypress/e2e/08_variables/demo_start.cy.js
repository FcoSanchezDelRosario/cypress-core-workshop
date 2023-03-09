/// <reference types="cypress" />

beforeEach(()=>{
  //Arrange
  cy.request('POST', '/api/boards', { name: 'new board' })
  .as('board')
})

it('opening a board', function() {
  // cy.request('POST', '/api/boards', { name: 'new board' })
  // .as('board')
  //De esta forma podremos tener en estas lineas codigo
  cy.get('@board')
    .then( ({ body }) => {
      const boardId = body.id
      cy.visit(`/board/${boardId}`)
    })
})

it.only('opening a board', function() {
//Al tener el request en el beforeEach podemos llamar directamente el board response con el this
      const boardId = this.board.body.id

      //Act
      cy.visit(`/board/${boardId}`)

      //Assert
})

it('see if it works', function(){
  console.log(this.board)
})