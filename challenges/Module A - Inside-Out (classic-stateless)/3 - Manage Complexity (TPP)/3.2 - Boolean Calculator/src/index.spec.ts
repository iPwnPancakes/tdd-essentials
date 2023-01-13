import { evaluate } from "./index";

describe('boolean calculator', () => {
    describe('single statements', () => {
        it('TRUE should return true', () => {
            const input = 'TRUE';

            expect(evaluate(input)).toBeTruthy();
        })

        it('FALSE should return false', () => {
            const input = 'FALSE';

            expect(evaluate(input)).toBeFalsy();
        })
    })

    describe('simple combinations', () => {
        it('TRUE AND TRUE should return true', () => {
            const input = 'TRUE AND TRUE';

            expect(evaluate(input)).toBeTruthy();
        })

        it('TRUE AND FALSE should return false', () => {
            const input = 'TRUE AND FALSE';

            expect(evaluate(input)).toBeFalsy();
        })
    })

    describe('negation statements', function () {
        it('NOT TRUE should return false', () => {
            const input = 'NOT TRUE';

            expect(evaluate(input)).toBeFalsy();
        })

        it('NOT FALSE should return true', () => {
            const input = 'NOT FALSE';

            expect(evaluate(input)).toBeTruthy();
        })
    });
})
