export const SEND_REQUEST = "SEND_REQUEST";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";

export interface Dictionary<T> {
  [id: number]: T;
}

export interface ApiCardState {
  status?: "PENDING" | "SUCCESS";
  message?: string;
  url: string;
}

interface SendRequestAction {
  type: typeof SEND_REQUEST;
  payload: {
    id: number;
    url: string;
  };
}

interface ReceiveResponseAction {
  type: typeof RECEIVE_RESPONSE;
  payload: {
    id: number;
    message: string;
  };
}

export type ApiCardActionTypes = SendRequestAction | ReceiveResponseAction;
