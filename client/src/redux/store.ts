import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { useDispatch } from "react-redux";
import { Action, ThunkDispatch } from '@reduxjs/toolkit';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export type RootState = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();

declare module 'react-redux' {
  interface DefaultRootState extends RootState {
    settings: ISettings
    allBuilds: Array<IBuild>,
    build: IBuild,
    logs: string
  }
}

interface IBuild {
  variant: "opened", 
  buildNumber: number, 
  commitMessage: string, 
  branchName: string, 
  commitHash: string, 
  authorName: string, 
  status: "Waiting" | "InProgress" | "Success" | "Fail" | "Canceled", 
  start: string, 
  duration: number
}

interface ISettings {
  id: string,
  repoName: string,
  buildCommand: string,
  mainBranch: string,
  period: number,
}
