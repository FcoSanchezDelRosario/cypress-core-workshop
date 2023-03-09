it('class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html');

  cy.contains('Shapes')
  cy.get('h1')

  cy.get('.square')
  cy.get('#circle')
  cy.get('[data-cy=triangle]')

  cy.get('div')
})

it.only('cypress commands', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  // selecting first element
  cy.get('li')

  //filter the first element from the  7 element
  cy.get('li').first()

  // selecting element using index
  cy.get('li')

  //select the yellow element by index(eq)
  cy.get('li').eq(2)

  // searching for child element
  cy.get('.list')

  //wwe find the element of the list 
  cy.get('.list').find('.green')

  // searching for previous element
  cy.contains('violet')

  //highlighting the element
  cy.contains('violet').prev()

});