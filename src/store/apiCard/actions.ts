import { SEND_REQUEST, RECEIVE_RESPONSE, ApiCardActionTypes } from "./types";

// TypeScript infers that this function is returning SendMessageAction
export function sendRequest(id: number, url: string): ApiCardActionTypes {
  return {
    type: SEND_REQUEST,
    payload: {
      id,
      url,
    },
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
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
