import { isValidRange } from "./index";

describe('military time validator', () => {
    it('returns true if given the range: 00:00 - 24:00', () => {
        const input = '00:00 - 24:00';

        expect(isValidRange(input)).toBeTruthy();
    })

    it('returns false if given the range: 00:00 - 25:00', () => {
        const input = '00:00 - 25:00';

        expect(isValidRange(input)).toBeFalsy();
    })

    it('returns true if given the range 01:12 - 14:32', () => {
        const input = '01:12 - 14:32';

        expect(isValidRange(input)).toBeTruthy();
    })

    it('returns false if given the range 25:00 - 12:23', () => {
        const input = '25:00 - 12:23';

        expect(isValidRange(input)).toBeFalsy();
    })

    it('returns true if given the range 22:00 - 23:12', () => {
        const input = '22:00 - 23:12';

        expect(isValidRange(input)).toBeTruthy();
    })
})
