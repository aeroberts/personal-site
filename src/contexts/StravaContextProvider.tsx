import React, { useState } from "react";

import { StravaContext, StravaState, initializeToken } from "./StravaContext";

interface Props {
  children: React.ReactNode;
}

/**
 * The main context provider
 */
export const StravaContextProvider: React.FunctionComponent<Props> = (
  props: Props,
) => {
  /**
   * Using react hooks, set the default state
   */
  const [state, setState] = useState({ stravaToken: initializeToken() });

  /**
   * Declare the update state method that will handle the state values
   */
  const updateState = (newState: Partial<StravaState>) => {
    setState({ ...state, ...newState });
  };

  /**
   * Context wrapper that will provider the state values to all its children nodes
   */
  return (
    <StravaContext.Provider value={{ ...state, updateState }}>
      {props.children}
    </StravaContext.Provider>
  );
};
