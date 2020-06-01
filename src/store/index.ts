import { combineReducers, createStore, applyMiddleware } from "redux";
import { apiCardReducer } from "./apiCard/apiCard";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  apiCards: apiCardReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
