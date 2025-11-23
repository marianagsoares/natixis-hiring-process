const testData = {
  signInHappyPath: {
    id: "TC012",
    description: "Successful user login",
    urlPath: "signin",
    pageText: "Sign In",
    username: "jhon",
    password: "Password@123",
    bankName: "Test Bank",
    routingNumber: "123456789",
    accountNumber: "123456789",
  },
  signInExceptions: [
    {
      id: "TC014",
      description:
        "Validate error message when the username is correct and the password is incorrect",
      urlPath: "signin",
      pageText: "Sign In",
      username: "jhon",
      password: "password@12",
      expectedText: "Username or password is invalid",
    },
    {
      id: "TC015",
      description:
        "Validate error message when the username is incorrect and the password is correct",
      urlPath: "signin",
      pageText: "Sign In",
      username: "jho",
      password: "password@123",
      expectedText: "Username or password is invalid",
    },
  ],
};

beforeEach(() => {
  cy.visit("/signin");
});

describe("Sign In: Happy Path", () => {
  it(`${testData.signInHappyPath.id} - ${testData.signInHappyPath.description}`, () => {
    cy.fillSignInFormFields(testData.signInHappyPath);
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="user-onboarding-next"]').click();
    cy.fillCreateBankAccountFormFields(testData.signInHappyPath);
    cy.get('[data-test="bankaccount-submit"]').click();
    cy.get('[data-test="user-onboarding-next"]').click();
    cy.get('[data-test="nav-public-tab"]').should("be.visible");
  });
});

describe("Sign In: Exceptions Scenarios", () => {
  testData.signInExceptions.forEach((testCase) => {
    it(`${testCase.id} - ${testCase.description}`, () => {
      cy.fillSignInFormFields(testCase);
      cy.get('[data-test="signin-submit"]').click();
      cy.contains(testCase.expectedText).should("be.visible");
    });
  });
});