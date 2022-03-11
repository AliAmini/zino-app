import React, {FC} from 'react';
import {Provider} from "react-redux";
import { store } from 'state/store';

const ReduxProvider: FC = ({
  children
}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default ReduxProvider;