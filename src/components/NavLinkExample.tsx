import React from "react";
import { MemoryRouter, Routes, Route, NavLink } from "react-router-dom";

export default function NavLinkExample() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <nav style={{ display: "flex", gap: 8 }}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </MemoryRouter>
  );
}
