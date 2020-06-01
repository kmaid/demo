import {
  Dictionary,
  ApiCardActionTypes,
  ApiCardState,
  SEND_REQUEST,
  RECEIVE_RESPONSE,
  Status,
} from "./types";

const initialState: Dictionary<ApiCardState> = {};

export function apiCardReducer(
  state = initialState,
  action: ApiCardActionTypes
): Dictionary<ApiCardState> {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          status: Status.PENDING,
        },
      };

    case RECEIVE_RESPONSE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
