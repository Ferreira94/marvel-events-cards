import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";

import { Cards } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/cards" element={<Cards />} />
      </Route>
    </Routes>
  );
}
