import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import NavLinkExample from "./components/NavLinkExample";

export default function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
        <h1>Cypress CT Starter</h1>
        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/router">Router</Link>
        </nav>

        <section style={{ display: "grid", gap: 16 }}>
          <div>
            <h2>Button</h2>
            <Button onClick={() => alert("Clicked!")}>Save</Button>
            <Button disabled style={{ marginLeft: 8 }}>Disabled</Button>
          </div>

          <div>
            <h2>TextInput (debounced)</h2>
            <TextInput onSearch={(v) => console.log("search:", v)} debounceMs={300} />
          </div>

          <div>
            <h2>TodoList (fetches /api/todos)</h2>
            <TodoList />
          </div>

          <div>
            <h2>Modal</h2>
            <button onClick={() => setOpen(true)}>Open Modal</button>
            <Modal open={open} title="Confirm" onClose={() => setOpen(false)}>
              <p>Modal body</p>
            </Modal>
          </div>

          <div>
            <h2>Router-bound link</h2>
            <Routes>
              <Route path="/" element={<div>Home screen</div>} />
              <Route path="/router" element={<NavLinkExample />} />
            </Routes>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}
