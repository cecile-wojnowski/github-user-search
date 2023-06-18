/// <reference types="cypress" />

describe("Test Github user search", () => {
  // could be improved
  beforeEach(() => {
    // it runs before each test
    cy.visit("http://localhost:3000");
  });

  it("displays users cards when there is any user input", () => {
    cy.get('input[name="search_input"]')
      .type("test")
      .should("have.value", "test");

    cy.get("[data-testid=Card1]").should("be.visible");
  });

  it("check cards", () => {
    cy.get('input[name="search_input"]').type("test");

    cy.get("[data-testid=CheckAll]").click().should("be.checked");
    cy.get("[data-testid=Checkbox_Card1]").should("be.checked");

    cy.get("[data-testid=Checkbox_Card1]").click();
    cy.get("[data-testid=Checkbox_Card1]").should("not.be.checked");
  });

  it("duplicate cards and delete the selected ones", () => {
    // Duplicate a card
    cy.get('input[name="search_input"]').type("t");

    cy.get("[data-testid=Checkbox_Card1]").click();
    cy.get("button[name=duplicate]").click();

    // Get the id of the duplicated card and check if it appears twice in the list
    let id = "";
    cy.get("[data-testid=Card1]")
      .find("p")
      .should(($p) => {
        const texts = $p.map((i, el) => Cypress.$(el).text());

        const paragraphs = texts.get();

        // Card contains 3 paragraphs : id, login and button text
        expect(paragraphs, "has 3 paragraphs").to.have.length(3);

        id = paragraphs[0];
      });

    cy.get("[data-testid=UsersList]")
      .find("p")
      .should(($p) => {
        const texts = $p.map((i, el) => Cypress.$(el).text());
        const paragraphs = texts.get();
        const duplicatedIds = paragraphs.filter((el) => el === id);
        expect(duplicatedIds, "has 2 occurrences").to.have.length(2);
      });

    // Delete card
    cy.get("[data-testid=Card2]").should("exist");
    cy.get("button[name=delete]").click();
    cy.get("[data-testid=Card2]").should("not.exist");
  });

  it("disable the edit mode", () => {
    cy.get('input[name="search_input"]').type("test");

    cy.get("[data-testid=CheckAll]").should("exist");
    cy.get("[data-testid=Checkbox_Card1]").should("exist");
    cy.get("[data-testid=EditMode]").click();

    cy.get("[data-testid=CheckAll]").should("not.exist");
    cy.get("[data-testid=Checkbox_Card1]").should("not.exist");
  });
});
