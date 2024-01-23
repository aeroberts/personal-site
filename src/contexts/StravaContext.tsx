import { createContext } from "react";

interface StravaToken {
  token: string;
  expiration: string;
  refresh: string;
}

/**
 * Application state interface
 */
export interface StravaState {
  stravaToken?: StravaToken;
  updateState: (newState: Partial<StravaState>) => void;
}

export function initializeToken(): StravaToken | undefined {
  const stravaTokenJsonString = localStorage.getItem("stravaToken");

  if (stravaTokenJsonString !== null && stravaTokenJsonString.length) {
    const token = JSON.parse(stravaTokenJsonString) as StravaToken;
    if (token.expiration && new Date(token.expiration) > new Date()) {
      // If not expired return the token otherwise return empty obj
      return token;
    }
  }
  return undefined;
}

/**
 * Default application state
 */
const defaultState: StravaState = {
  stravaToken: initializeToken(),
  updateState: (newState?: Partial<StravaState>) => {},
};

/*
 */

export const StravaContext = createContext<StravaState>(defaultState);
