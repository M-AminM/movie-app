import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="bg-zinc-900">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
