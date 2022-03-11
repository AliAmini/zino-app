import React, {FC} from 'react';
import {Provider} from "react-redux";
import {Store} from 'redux';
import { AppReducers } from 'state/reducers';
import ReduxProvider from 'state/reduxProvider';
import { getStore } from 'state/store';

interface Props {
  initialState?: AppReducers,
}

export const TestComponentWrapper: FC<Props> = ({
  initialState,
  children
}) => {
  const store = getStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};