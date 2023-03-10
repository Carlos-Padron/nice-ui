import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import BuyCredits from "../screens/BuyCredits";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProjectScreen from "../screens/ProjectScreen";
import SettAndMembersScreen from "../screens/SettAndMembersScreen";
import VocabularyScreen from "../screens/VocabularyScreen";

import Template from "./../partials/Template/Template";
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Template>
              <ProjectScreen />
            </Template>
          }
        />
        <Route
          exact
          path="/members"
          element={
            <Template>
              <SettAndMembersScreen />
            </Template>
          }
        />
        <Route
          exact
          path="/vocabulary"
          element={
            <Template>
              <VocabularyScreen />
            </Template>
          }
        />
        <Route
          exact
          path="/analytics"
          element={
            <Template>
              <AnalyticsScreen />
            </Template>
          }
        />
        <Route exact path="/buy-credits" element={<BuyCredits />} />
        <Route exact path="/buy-credits" element={<BuyCredits />} />
        <Route path='*' element={<NotFoundScreen />} />

      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
