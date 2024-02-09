import React from "react";
import HomePage from "../HomePage";
import UserPage from "../UserPage";
import TodosPage from "../TodosPage";
import GarbagePage from "../GarbagePage";

export const routes = [
  {path: '/', element: <HomePage />, exact: true},
  {path: '/user', element: <UserPage />, exact: true},
  {path: '/todos', element: <TodosPage />, exact: true},
  {path: '/garbage', element: <GarbagePage />, exact: true},
];