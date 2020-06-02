import {
  SEND_REQUEST as START_REQUEST,
  RECEIVE_RESPONSE,
  ApiCardActionTypes,
} from "./types";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "..";

interface apiResponse {
  message: string;
}

export function startRequest(id: number, url: string): ApiCardActionTypes {
  return {
    type: START_REQUEST,
    payload: {
      id,
      url,
    },
  };
}
export const makeRequest = (
  id: number,
  url: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch: Function
) => {
  await fetch(url)
    .then((response) => response.json())
    .then((json: apiResponse) => dispatch(receiveResponse(id, json.message)));
};

export function receiveResponse(
  id: number,
  message: string
): ApiCardActionTypes {
  return {
    type: RECEIVE_RESPONSE,
    payload: {
      id,
      message,
    },
  };
}
