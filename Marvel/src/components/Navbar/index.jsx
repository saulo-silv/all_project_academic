import React from "react";

export default function Navbar({ Cabecalho, children }) {
  return (
    <header>
      <nav className="navbar">
        {Cabecalho}
        <ul>{children}</ul>
      </nav>
    </header>
  );
}
