import { ofType } from "redux-observable";
import { switchMap, ignoreElements, catchError, map } from "rxjs/operators";
import {from} from 'rxjs';

import { LOGIN_ATTEMPTED, loginSuccess, loginfailure, LOGIN_SUCCESSFUL } from "./auth.actions";
import { push } from "connected-react-router";
// import { from } from "rxjs/dist/cjs";

export const attemptLoginEpic = (action$, state$) => action$.pipe(
    ofType(LOGIN_ATTEMPTED),
    map(loginSuccess),
    catchError(loginfailure)
);

// export const loginSuccessEpic = (action$ , state$) => action$.pipe(
//     ofType(LOGIN_SUCCESSFUL),
//     map(()=>push('/dashboard'))
// )