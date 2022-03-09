import { Dispatch } from "redux";
import { Client } from "types/client";
import { UPDATE_CLIENT_INFO } from "state/enums";

export const updateClient = (info: Client) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_CLIENT_INFO,
      payload: info
    })
  }
};