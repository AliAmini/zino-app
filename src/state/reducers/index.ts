import {combineReducers} from "redux";
import clientReducer, { ClientState } from "./clientReducer";

export interface AppReducers {
  client: ClientState
}
const reducers = combineReducers<AppReducers>({
  client: clientReducer,
});

export default reducers;