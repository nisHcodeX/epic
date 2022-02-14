import {ofType} from 'redux-observable';
import {DASHBOARD_LOAD_ATTEMPED, dashboardLoadSuccess} from './dashboard.actions';
import {ignoreElements, switchMap, map} from 'rxjs/operators';
import {from} from 'rxjs';

export const dashboardLoadStartEpic = (action$, state$) => action$.pipe(
    ofType(DASHBOARD_LOAD_ATTEMPED),
    map(dashboardLoadSuccess) 
)