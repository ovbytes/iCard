import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Navegacion</h2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
