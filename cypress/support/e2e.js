import "./commands";
import "cypress-plugin-steps";

before(() => {
  cy.section(`${Cypress.currentTest.titlePath[0]} 📝`);
});

before(() => {
  cy.step(`${Cypress.currentTest.title} 📌`);
});
