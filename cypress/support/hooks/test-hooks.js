let url;

before(async () => {
  url = Cypress.env(Cypress.env("run"));
  await cy.visit(Cypress.env(Cypress.env("run")).url);
});

before(() => {
  cy.url().then(async (_url) => {
    if (_url === url.session_login) {
      cy.log(`clear session login`);
      cy.clearAllLocalStorage();
      await cy.visit(url.url);
    }
  });
});
