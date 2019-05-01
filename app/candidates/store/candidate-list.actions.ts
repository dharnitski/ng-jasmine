/* tslint:disable:max-classes-per-file */
import { Action } from "@ngrx/store";


export const FETCH_CANDIDATES_WITH_FILTER = "[FILTER CANDIDATES LIST] Fetch Candidates with Filters";
export const TEST = "[FILTER CANDIDATES LIST] TEST";

export class FetchCandidatesWithFilter implements Action {
	readonly type = FETCH_CANDIDATES_WITH_FILTER;
}


export type Actions =
	| FetchCandidatesWithFilter
	;