import { Route, Routes } from "react-router-dom";

import { Cards, Home } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards" element={<Cards />} />
    </Routes>
  );
}
