import { cold } from 'jasmine-marbles';
import { CandidateListEffects } from '../../candidates/store/candidate-list.effects';
import { FETCH_CANDIDATES_WITH_FILTER, TEST } from '../../candidates/store/candidate-list.actions';
import { Actions } from '@ngrx/effects';

describe("Candidate List Effects", () => {


    describe("ts smoke test", () => {
        it("jasmine should work", () => {
            expect(true).toBe(true);
        });
    });

    describe("Candidate List Effects", () => {

        it("should create", () => {
            const source = cold('a', { a: { type: FETCH_CANDIDATES_WITH_FILTER } });
            const effects = new CandidateListEffects(new Actions(source));
            expect(effects).toBeTruthy();
        });

        describe("mapTo", () => {
            it("should work", () => {
                const source = cold('a', { a: { type: FETCH_CANDIDATES_WITH_FILTER } });
                const effects = new CandidateListEffects(new Actions(source));
                const expected = cold('a', { a: { type: TEST } });
                expect(effects.mapTo$).toBeObservable(expected);
            });
        });
    });
});
