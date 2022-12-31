/// <reference types="cypress" />

describe("Test Github user search", () => {
  beforeEach(() => {
    // it runs before each test
    cy.visit("http://localhost:3000");
  });

  it("displays users cards when there is any user input", () => {
    cy.get('input[name="search_input"]')
      .type("test")
      .should("have.value", "test");

    cy.get("[data-testid=Card]").should("be.visible");
  });

  it("check cards", () => {
    cy.get('input[name="search_input"]')
      .type("test")
      .should("have.value", "test");

    cy.get("[data-testid=CheckAll]").click().should("be.checked");
    cy.get("[data-testid=Card] [data-testid=Checkbox]")
      .should("be.checked")
      .click()
      .should("not.be.checked");
  });

  it("duplicate cards and delete the selected ones", () => {
    // Duplicate a card
    cy.get('input[name="search_input"]')
      .type("test")
      .should("have.value", "test");
    // cy.get('input[name="search_input"]')
    // Check if there is the same id or login twice
    // Click on the delete button
    // Check if on the two same cards, the checked one disappears
  });

  it("disable the edit mode", () => {});
});
