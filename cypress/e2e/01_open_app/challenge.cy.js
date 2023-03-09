it('opening the trello application', () => {

  // challenge #1: open the main page. you can either try "localhost:3000" or "/" 
  //👇 write your command below this line 👇
  cy.visit('/')

  // challenge #2: open a board detail page. it’s the one you see when you click on a board
  //👇 write your command below this line 👇
  cy.contains('new board').click()

  // challenge #3: try clicking on a card. this will open the card detail. observe how 
  // the URL changes. now go ahead and try to use it with .visit() command
  //👇 write your command below this line 👇
  
  //cy.visit('/board/1?card=1')

  //Check this why we don´t be able to click on the element
  cy.get('[data-cy=card-list] [data-cy=card]:first-child').click

  // 💯 extra credit challenge: are you familiar with query parameters? it’s the part of the URL
  // that comes after "?" sign. spend some time in documentation, and try to see how to write 
  // these query parameters as an object, that will be passed to the .visit() command
  // 📚 https://docs.cypress.io/api/commands/visit#Add-query-paramaters
  //👇 write your command below this line 👇

});