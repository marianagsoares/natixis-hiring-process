Cypress.Commands.add(
  "fillSignUpFormFields", (testCase) => {
    cy.url().should("include", testCase.urlPath);
    cy.contains(testCase.pageText).should("be.visible");
    cy.get("#firstName").type(testCase.firstName);
    cy.get("#lastName").type(testCase.lastName);
    cy.get("#username").type(testCase.username);
    cy.get("#password").type(testCase.password);
    cy.get("#confirmPassword").type(testCase.confirmPassword);
  }
);

Cypress.Commands.add(
  "fillSignInFormFields", (testCase) => {
    cy.url().should("include", testCase.urlPath);
    cy.contains(testCase.pageText).should("be.visible");
    cy.get("#username").type(testCase.username);
    cy.get("#password").type(testCase.password);
  }
);

Cypress.Commands.add(
  "fillCreateBankAccountFormFields", (testCase) => {
    cy.get("#bankaccount-bankName-input").type(testCase.bankName);
    cy.get("#bankaccount-routingNumber-input").type(testCase.routingNumber);
    cy.get("#bankaccount-accountNumber-input").type(testCase.accountNumber);
  }
);