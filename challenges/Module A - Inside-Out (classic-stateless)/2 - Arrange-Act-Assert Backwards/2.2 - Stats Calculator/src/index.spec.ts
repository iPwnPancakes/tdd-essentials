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

        it('returns 100 given the values [0, 0, 0, 100, 0, 99]', () => {
            const numbers = [0, 0, 0, 100, 0, 99];

            expect(computeStats(numbers).max).toBe(100);
        })
    })

    describe('average value', () => {
        it('returns 18.666666666667 given the values [2, 4, 21, -8, 53, 40]', () => {
            const numbers = [2, 4, 21, -8, 53, 40];

            expect(computeStats(numbers).average).toBe(18.666666666667);
        })

        it('returns 0.333333333 given the values [0, 0, 1]', () => {
            const numbers = [0, 0, 1];

            expect(computeStats(numbers).average).toBe(0.333333333333);
        })
    })
})