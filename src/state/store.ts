import {createStore, applyMiddleware} from 'redux';
import reducers, { AppReducers } from './reducers';
import thunk from "redux-thunk";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
);

export const getStore = (initialState?: AppReducers | undefined) => {
  return createStore(
    reducers,
    initialState? initialState : {},
    applyMiddleware(thunk)
  );
};

