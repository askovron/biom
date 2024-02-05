describe("Basic checks", () => {
  it("checks first row per requirements", () => {
    cy.visit("http://localhost:5173/");

    cy.get(".rdg-row")
      .first()
      .children()
      .first()
      .should("have.text", "Lactobacillus crispatus SJ-3C-US")
      .next()
      .should("have.text", "575598")
      .next()
      .should("have.text", "139028.29")
      .next()
      .should("have.text", "94.43%")
      .next()
      .should("have.text", "1362");
  });
});
