import { computeStats } from "./index";

describe('stats calculator', () => {
    describe('minimum value', () => {
        it('returns -8 given the values: [2, 4, 21, -8, 53, 40]', () => {
            const numbers = [2, 4, 21, -8, 53, 40];

            expect(computeStats(numbers).min).toBe(-8);
        })

        it('returns 2 given the values [2, 4, 6, 8]', () => {
            const numbers = [2, 4, 6, 8];

            expect(computeStats(numbers).min).toBe(2);
        })
    })

    describe('maximum value', () => {
        it('returns 53 given the values [2, 4, 21, -8, 53, 40]', () => {
            const numbers = [2, 4, 21, -8, 53, 40];

            expect(computeStats(numbers).max).toBe(53);
        })
    })
})