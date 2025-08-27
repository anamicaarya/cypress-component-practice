import { mount } from "cypress/react18";
import "@testing-library/cypress/add-commands";
import "cypress-axe";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);
