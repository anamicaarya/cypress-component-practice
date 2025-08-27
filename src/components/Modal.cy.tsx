import React from "react";
import Modal from "./Modal";

function Wrapper() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal open={open} title="Confirm" onClose={() => setOpen(false)}>
        <p>Body</p>
      </Modal>
    </div>
  );
}

describe("Modal", () => {
  it("shows dialog with a11y role and closes on Escape", () => {
    cy.mount(<Wrapper />);
    cy.findByRole("dialog", { name: /confirm/i }).should("exist");
    cy.injectAxe();
    cy.checkA11y();
    cy.get("body").type("{esc}");
    cy.findByRole("dialog", { name: /confirm/i }).should("not.exist");
  });
});
