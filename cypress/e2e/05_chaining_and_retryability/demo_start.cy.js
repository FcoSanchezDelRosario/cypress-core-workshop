/// <reference types="cypress" />

import { cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

it('opens a card with due date on 1st March', () => {

  cy.visit('/board/1')

  cy.contains('Mar 01 2022')

  cy.get('[data-cy=card]')
  .eq(1)
  .should('Mar 01 2022')


})

it('actions, queries, assertions',() => {

  cardsLoadSlowly(5000)

  cy.visit('/board/1')

  cy.get('[data-cy=card]',{timeout: 6000})
    .eq(2)
    .should('contain.text', 'Juice')

});


it('actions, queries, assertions',{defaultCommandTimeout:10000},
 () => {

  cardsLoadSlowly(5000)

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'Juice')

});