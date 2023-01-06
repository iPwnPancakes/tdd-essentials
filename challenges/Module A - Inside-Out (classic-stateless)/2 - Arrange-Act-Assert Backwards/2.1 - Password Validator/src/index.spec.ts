import { isPasswordValid } from "./index";

describe('password validator', () => {
    describe('Between 5 and 15 characters long', () => {
        it('returns true for strings with 5 characters', () => {
            expect(isPasswordValid('12345A')).toBeTruthy();
        })

        it('returns true for strings with 15 characters', () => {
            expect(isPasswordValid('123456789ABCDEF')).toBeTruthy();
        })

        it('returns false for strings with 1 character', () => {
            expect(isPasswordValid('1')).toBeFalsy();
        })

        it('returns false for strings with 16 characters', () => {
            expect(isPasswordValid('123456789ABCDEFF')).toBeFalsy();
        })
    })

    describe('Contains at least one digit Contains at least one upper case letter', () => {
        it('should return true for 123456789ABCDEF', () => {
            expect(isPasswordValid('123456789ABCDEF')).toBeTruthy();
        })

        it('should return false for 123456789abcdef', () => {
            expect(isPasswordValid('123456789abcdef')).toBeFalsy();
        })

        it('should return false if no digits in string', () => {
            expect(isPasswordValid('ABCDEFG')).toBeFalsy();
        })
    })
})

