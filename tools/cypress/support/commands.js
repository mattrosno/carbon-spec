// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import nextTabbable from './nextTabbable';

/**
 * Emulates Tab key navigation.
 */
Cypress.Commands.add(
  'typeTab',
  { prevSubject: 'optional' },
  ($subject, direction = 'forward') => {
    const thenable = $subject
      ? cy.wrap($subject, { log: false })
      : cy.focused({ log: false });

    thenable
      .then($el => nextTabbable($el, direction))
      .then($el => {
        Cypress.log({
          $el,
          name: 'tab',
          message: direction,
        });
      })
      .focus({ log: false });
  }
);

/**
 * Emulates Enter key navigation.
 */
Cypress.Commands.add('typeEnter', (options = {}) => {
  cy.focused({ log: false }).then($el => {
    cy.wrap($el, { log: false }).trigger('keydown', {
      bubbles: true,
      keyCode: 13,
      which: 13,
    });
  });
});

/**
 * Emulates Space key navigation.
 */
Cypress.Commands.add('typeSpace', (options = {}) => {
  cy.focused({ log: false }).then($el => {
    cy.wrap($el, { log: false }).trigger('keydown', {
      bubbles: true,
      keyCode: 32,
      which: 32,
    });
  });
});

/**
 * Emulates Escape key navigation.
 */
Cypress.Commands.add('typeEsc', (options = {}) => {
  cy.focused({ log: false }).then($el => {
    cy.wrap($el, { log: false }).trigger('keydown', {
      bubbles: true,
      keyCode: 27,
      which: 27,
    });
  });
});
