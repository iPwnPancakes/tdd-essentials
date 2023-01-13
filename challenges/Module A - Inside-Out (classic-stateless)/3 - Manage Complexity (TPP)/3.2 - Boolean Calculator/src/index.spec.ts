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
})
