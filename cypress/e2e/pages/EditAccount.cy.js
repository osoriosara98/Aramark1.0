
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
 
 describe('Login Page English', () => {
 
 Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    
  })



  beforeEach(() => {
    // Login
    cy.visit("https://myportallogindev.aramark.com/login") // Replace with your login page URL
   cy.Validlogin()
  });

  it("Verifies that clicking on a button does not redirect to the login page", () => {
    // Intercept the network request that may cause a redirect
    cy.intercept("POST", "https://myportalaccountdev.aramark.com/").as("postRequest")

    // Click on the button that triggers the network request
    cy.get('aus-button').click()

    // Wait for the network request to complete
    cy.wait("@postRequest");

    // Assert that the test does not return to the login page
    cy.url().should("not.include", "/login");
  });

  // Other test cases...
});
