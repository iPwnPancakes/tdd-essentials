import { isPasswordValid } from "./index";

describe('password validator', () => {
    describe('Between 5 and 15 characters long', () => {
        it('returns true for strings with 5 characters', () => {
            expect(isPasswordValid('12345')).toBeTruthy();
        })

        it('returns true for strings with 15 characters', () => {
            expect(isPasswordValid('123456789ABCDEF')).toBeTruthy();
        })

        it('returns false for strings with 1 character', () => {
            expect(isPasswordValid('1')).toBeFalsy();
        })
    })
})

