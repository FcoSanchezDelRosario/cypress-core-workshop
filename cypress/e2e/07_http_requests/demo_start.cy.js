/// <reference types="cypress" />

it('sends a request over API', () => {

  cy.request('POST','/api/boards',{
    name: 'created with cy.request()'
  })

  cy.visit('/')
  
});

it.only('response gets 201 status', () => {
  cy.request({
   method:'POST',
   url: 'api/boards',
   body: {
      name: 'hello Word'
   }
  }).its('status')
  .should(200)

});

it('testing board list', () => {
  cy.request({
    method:'GET',
    url: 'api/boards',
    headers:{
      accept: 'application/json'
    }
   }).then(board =>{
    expect(board.body[0].starred).to.be.false
    expect(board.body[0].id).to.be.a('number')

   })

});

it('resetting database', () => {
  
});

before(()=>{
  cy.request('POST','/api/reset')
})