import { combineReducers, createStore } from "redux";
import { apiCardReducer } from "./apiCard/apiCard";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  apiCards: apiCardReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
