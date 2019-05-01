import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromList from './candidate-list.reducer';

export interface CandidatesState {
    list: fromList.State,
}

const selectFeature = createFeatureSelector<CandidatesState>('candidates');

export const selectFilters = createSelector(selectFeature, feature => feature);


export const getFilters = createSelector(selectFilters, filters => filters);