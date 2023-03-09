/// <reference types="cypress" />

// challenge #1: try resetting the database using setupDb script
it('resetting the database', () => {

  cy.task('clearDatabase')
  cy.visit('/')
    
});

// challenge #2: now try seeding the database with your own data and open
// a board that you have seeded in
it('seeding the database', () => {

  cy.task('seedDatabase',{
    boards: [{
      name: 'seeded board Fran',
      id: 1,
      user: 0,
      starred: false,
      created: '2022-01-23'
    }],
    lists: [],
    cards: [],
    users: []
  })

  cy.visit('/board/1')
    
});
