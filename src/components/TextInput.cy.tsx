import React from "react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("debounces search calls", () => {
    const onSearch = cy.spy().as("search");
    cy.clock();
    cy.mount(<TextInput onSearch={onSearch} debounceMs={300} />);

    cy.findByLabelText(/search/i).type("abc");
    cy.get("@search").should("not.have.been.called");
    cy.tick(299);
    cy.get("@search").should("not.have.been.called");
    cy.tick(1);
    cy.get("@search").should("have.been.calledWith", "abc");
  });

  it("clears input", () => {
    const onSearch = cy.spy().as("search");
    cy.clock();
    cy.mount(<TextInput onSearch={onSearch} debounceMs={300} />);
    cy.findByLabelText(/search/i).type("x");
    cy.findByRole("button", { name: /clear/i }).click();
    cy.get("@search").should("have.been.calledWith", "");
  });
});
