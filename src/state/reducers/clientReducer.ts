import { AnyAction } from 'redux';
import * as actionNames from 'state/enums/actionNames';
import {ClientAddress, Client, RegisterStatus} from "types/client";

export interface ClientState {
  info: Client | undefined,
  registerStatus: RegisterStatus
  addressInfo: ClientAddress | undefined
}

const initialState: ClientState = {
  info: undefined,
  registerStatus: "personalInformation",
  addressInfo: undefined,
}

const clientReducer = (prevState: ClientState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionNames.UPDATE_CLIENT_INFO:
        return {...prevState, info: {...prevState.info, ...action.payload}};
      break;

    case actionNames.REGISTER_STATUS:
      return {...prevState, registerStatus: action.payload};
      break;
      
    case actionNames.UPDATE_CLIENT_ADDRESS_INFO:
      return {...prevState, addressInfo: {...prevState.addressInfo, ...action.payload}};
      break;

    default:
      return prevState;
      break;
  }
}

export default clientReducer;