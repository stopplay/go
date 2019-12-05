/**
 * @flow
 * @format
 */

import { createContext } from 'react';

// Types
type LoadingState = {
  loading: boolean,
};

// Initial State
export const loadingInitialState: LoadingState = {
  loading: false,
};

// Actions
export function loadingReducer(
  state: LoadingState = loadingInitialState,
  status: boolean,
) {
  return {
    loading: status,
  };
}

export default createContext<any>(loadingInitialState);
