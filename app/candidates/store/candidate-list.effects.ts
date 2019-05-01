import { Observable, of } from "rxjs";
import { Action, Store } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { catchError, mergeMap, switchMap, tap, withLatestFrom, mapTo } from "rxjs/operators";
import { FETCH_CANDIDATES_WITH_FILTER, FetchCandidatesWithFilter, TEST } from "./candidate-list.actions";

// import { FETCH_CANDIDATES_WITH_FILTER, FetchCandidatesWithFilter, TEST } from "~/app/candidates/store/candidate-list.actions";
// /app/candidates/store/candidate-list.actions

import * as candidateState from './candidates.state';

export class CandidateListEffects {

    mapTo$: Observable<Action> = this.actions$
        .pipe(
            ofType<FetchCandidatesWithFilter>(FETCH_CANDIDATES_WITH_FILTER),
            mapTo({ type: TEST })
        );

    fetchCandidatesWithFilters$: Observable<string> = this.actions$
        .pipe(
            ofType<FetchCandidatesWithFilter>(FETCH_CANDIDATES_WITH_FILTER),
            mapTo('HELLO WORLD!')
        );

    constructor(
        private actions$: Actions) {
    }
}