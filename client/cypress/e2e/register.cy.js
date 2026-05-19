describe("Register", () => {
  it("can create an account", () => {
    cy.visit("/signup");
    cy.get('input[name="email"]').type("test@cypress.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.contains("User created, you can signin");
  });
});
