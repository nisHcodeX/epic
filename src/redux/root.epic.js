import { combineEpics } from "redux-observable";
import  { attemptLoginEpic } from "../auth/auth.epic"


export const rootEpic = combineEpics(attemptLoginEpic );