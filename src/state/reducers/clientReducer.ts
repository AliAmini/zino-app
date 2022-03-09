import { AnyAction } from 'redux';
import * as actionNames from 'state/enums';
import {Client} from "types/client";

export interface ClientState {
  info: Client | null,
  registered: boolean
}

const initialState: ClientState = {
  info: null,
  registered: false
}

const clientReducer = (prevState: ClientState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionNames.UPDATE_CLIENT_INFO:
        return {...prevState, info: {...prevState.info, ...action.payload}};
      break;

    case actionNames.CLIENT_IS_REGISTERED:
      return {...prevState, registered: action.payload};
      break;
      
  
    default:
      return prevState;
      break;
  }
}

export default clientReducer;