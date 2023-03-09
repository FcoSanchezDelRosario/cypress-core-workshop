/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element based on data-cy
       * @example
       */
      dataCy(selector)

     
    }
  }