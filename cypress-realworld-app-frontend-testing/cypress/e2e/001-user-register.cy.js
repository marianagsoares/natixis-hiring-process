const testData = {
  signUpHappyPath: {
    id: "TC001",
    description: "Successful user registration",
    pageText: "Sign Up",
    urlPath: "signup",
    firstName: "Jhon",
    lastName: "Doe",
    username: "jhon",
    password: "Password@123",
    confirmPassword: "Password@123",
    expectedText: "User successfully registered",
  },
  signUpExceptions: [
    {
      id: "TC002",
      description:
        "Validate error message when First Name field has fewer than 3 characters",
      pageText: "Sign Up",
      urlPath: "signup",
      firstName: "Jh",
      lastName: "Doe",
      username: "jhon",
      password: "Password@123",
      confirmPassword: "Password@123",
      expectedText: "First Name must contain at least 3 characters",
    },
    {
      id: "TC003",
      description:
        "Validate error message when Last Name field has fewer than 3 characters",
      pageText: "Sign Up",
      urlPath: "signup",
      firstName: "Jhon",
      lastName: "Do",
      username: "jhon",
      password: "Password@123",
      confirmPassword: "Password@123",
      expectedText: "Last Name must contain at least 3 characters",
    },
    {
      id: "TC004",
      description:"Validate error message when Password field has fewer than 4 characters",
      pageText: "Sign Up",
      urlPath: "signup",
      firstName: "Jhon",
      lastName: "Doe",
      username: "jhon",
      password: "123",
      confirmPassword: "123",
      expectedText: "Password must contain at least 4 characters",
    },
  ],
};

beforeEach(() => {
  cy.visit("/signup");
});

describe("Sign Up: Happy Path", () => {
  it(`${testData.signUpHappyPath.id} - ${testData.signUpHappyPath.description}`, () => {
    cy.fillSignUpFormFields(testData.signUpHappyPath);
    cy.get('[data-test="signup-submit"]').click();
    cy.wait(5000);
  });
});

describe("Sign Up: Exceptions Scenarios", () => {
  testData.signUpExceptions.forEach((testCase) => {
    it(`${testCase.id} - ${testCase.description}`, () => {
      cy.fillSignUpFormFields(testCase);
      cy.contains(testCase.expectedText).should("be.visible");
      cy.get('[data-test="signup-submit"]').should("be.disabled");
    });
  });
});