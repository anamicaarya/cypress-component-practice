import React from "react";
import Button from "./Button";

describe("Button", () => {
  it("renders label and handles click", () => {
    const onClick = cy.spy().as("click");
    cy.mount(<Button onClick={onClick}>Save</Button>);
    cy.findByRole("button", { name: /save/i }).should("be.enabled").click();
    cy.get("@click").should("have.been.calledOnce");
  });

  it("is disabled when disabled prop set", () => {
    cy.mount(<Button disabled>Save</Button>);
    cy.findByRole("button", { name: /save/i }).should("be.disabled");
  });
});
