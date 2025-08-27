import React from "react";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("renders todos from API", () => {
    cy.intercept("GET", "/api/todos", { fixture: "todos.json" }).as("getTodos");
    cy.mount(<TodoList />);
    cy.wait("@getTodos");
    cy.findByText("Doctor Appointment").should("exist");
    cy.findByText("Meeting at School").should("exist");
  });

  it("handles error and retries", () => {
    cy.intercept("GET", "/api/todos", { statusCode: 500 }).as("fail");
    cy.mount(<TodoList />);
    cy.wait("@fail");
    cy.findByRole("alert").should("contain.text", "Failed");
    cy.intercept("GET", "/api/todos", { fixture: "todos.json" }).as("ok");
    cy.findByRole("button", { name: /retry/i }).click();
    cy.wait("@ok");
    cy.findByText("Doctor Appointment").should("exist");
  });
});
