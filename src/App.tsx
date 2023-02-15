import React from "react";
import { Route, Routes } from "react-router";
import Detail from "./components/Detail";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="bg-zinc-900">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:category/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
