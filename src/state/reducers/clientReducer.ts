import { AnyAction } from 'redux';
import {Client} from "types/client";

interface clientState {
  client: Client
}

const initialState: clientState = {
  client: {}
}

const clientReducer = (prevState: clientState = initialState, action: AnyAction) => {
  switch (action.type) {
    case "updateClient":
        return {...prevState.client, ...action.payload};
      break;
  
    default:
      return prevState;
      break;
  }
}

export default clientReducer;