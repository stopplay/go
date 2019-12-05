/**
 * @format
 * @flow
 */

import React, { useReducer } from 'react';
import styles from './src/views/styles/GeneralScreenStyle';
import AppNavigation from './src/navigation/AppNavigation';
// Types
import type { State } from './src/utils/context/Context';
// Contexts
import Context, { reducer, initialState } from './src/utils/context/Context';
import LoadingContext, {
  loadingReducer,
  loadingInitialState,
} from './src/utils/context/LoadingContext';
// Components
import Loading from './src/components/Loading';

const App = () => {
  const [state: State, dispatch: any] = useReducer(reducer, initialState);
  const [loadingState: State, setLoading: any] = useReducer(
    loadingReducer,
    loadingInitialState,
  );

  return (
    <Context.Provider value={{ state, dispatch }}>
      <LoadingContext.Provider value={{ loadingState, setLoading }}>
        <Loading loading={loadingState.loading} />
        <AppNavigation style={styles.main} />
      </LoadingContext.Provider>
    </Context.Provider>
  );
};

export default App;
