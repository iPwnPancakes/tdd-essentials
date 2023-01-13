import { isValidRange } from "./index";

describe('military time validator', () => {
    describe('hours only', () => {
        it('returns true if given the range: 00:00 - 24:00', () => {
            const input = '00:00 - 24:00';

            expect(isValidRange(input)).toBeTruthy();
        })
    })
})
