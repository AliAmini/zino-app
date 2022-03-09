import React, {useMemo} from 'react';
import { Dispatch, bindActionCreators } from "redux";
import * as ClientActionCreators from "./clientActionCreators";

const useActions = (dispatch: Dispatch) => {
  const clientActions = useMemo(() => (
    bindActionCreators(ClientActionCreators, dispatch)
  ), [dispatch]);

  return clientActions;
}

export default useActions;