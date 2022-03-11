import { Dispatch } from "redux";
import { ClientAddress, Client, RegisterStatus } from "types/client";
import * as actionNames from "state/enums/actionNames";

export const updateClient = (info: Client) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionNames.UPDATE_CLIENT_INFO,
      payload: info
    })
  }
};

export const updateRegisterStatus = (info: RegisterStatus) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionNames.REGISTER_STATUS,
      payload: info
    })
  }
};

export const updateClientAddress = (info: ClientAddress) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionNames.UPDATE_CLIENT_ADDRESS_INFO,
      payload: info
    })
  }
};