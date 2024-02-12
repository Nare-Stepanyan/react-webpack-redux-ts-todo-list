import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

export const appSelector = (state: RootState) => state.app;

export const todosSelecetor = createSelector(appSelector, (app) => app.todos);
