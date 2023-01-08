import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectScreen from "../screens/ProjectScreen";

import Template from "./../partials/Template/Template";
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route exact path="/" element={<ProjectScreen />}></Route>
        </Routes>
      </Template>
    </BrowserRouter>
  );
};

export default MainRouter;
