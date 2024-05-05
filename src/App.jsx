import React from "react";
import { Route, Routes } from "react-router";
import { SettingsPage} from "./pages/Settings";
import {HomePage } from "./pages/Home";
import { Router } from "./constants/ROUTE";
import { DetailPage } from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path={Router.home} element={<HomePage/>} />
        <Route path={Router.setting} element={<SettingsPage />} />
        <Route path={Router.detail} element={<DetailPage />} />

      </Routes>
    </>
  );
}

export default App;
