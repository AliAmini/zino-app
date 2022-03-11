import { AppReducers } from "state/reducers";

export const clientSelector = (state: AppReducers) => state.client.info;
export const clientAddressSelector = (state: AppReducers) => state.client.addressInfo;
export const registerStatusSelector = (state: AppReducers) => state.client.registerStatus;