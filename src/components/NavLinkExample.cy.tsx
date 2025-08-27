// import React from "react";
// import NavLinkExample from "./NavLinkExample";

// describe("NavLinkExample", () => {
//   it("navigates between routes and marks active link", () => {
//     cy.mount(<NavLinkExample />);
//     cy.findByText("Home").should("exist");
//     cy.findByRole("link", { name: /about/i }).click();
//     cy.findByText("About").should("exist");
//     cy.findByRole("link", { name: /about/i }).should("have.class", "active");
//   });
// });

// src/components/NavLinkExample.cy.tsx
import React from "react";
import NavLinkExample from "./NavLinkExample";

describe("NavLinkExample", () => {
  it("navigates and marks the active link", () => {
    cy.mount(<NavLinkExample />);

    // Check the active link inside the navigation only
    cy.findByRole("navigation").within(() => {
      cy.findByRole("link", { name: /home/i }).should("have.class", "active");
      cy.findByRole("link", { name: /about/i }).click();
      cy.findByRole("link", { name: /about/i }).should("have.class", "active");
    });

    // Verify the page content separately without colliding with the nav link
    cy.findByText(/^About$/).should("exist");
  });
});
