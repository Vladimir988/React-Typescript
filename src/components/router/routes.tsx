import React from "react";
import HomePage from "../HomePage";
import UserPage from "../UserPage";
import UserItemPage from "../UserItemPage";
import TodosPage from "../TodosPage";
import GarbagePage from "../GarbagePage";
import NotFound from "../NotFound";

export const routes = [
  {path: '/', element: <HomePage />, exact: true},
  {path: '/users', element: <UserPage />, exact: true},
  {path: '/users/:id', element: <UserItemPage />, exact: true},
  {path: '/todos', element: <TodosPage />, exact: true},
  {path: '/garbage', element: <GarbagePage />, exact: true},
  {path: '*', element: <NotFound />, exact: true},
];