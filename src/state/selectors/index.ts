import { AppReducers } from "state/reducers";

export const clientSelector = (state: AppReducers) => state.client.info;
export const isRegisteredSelector = (state: AppReducers) => state.client.registered;