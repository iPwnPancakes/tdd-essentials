import { isPasswordValid } from "./index";

describe('password validator', () => {
    describe('Between 5 and 15 characters long', () => {
        it('returns true for strings with 5 characters', () => {
            expect(isPasswordValid('12345A').valid).toBeTruthy();
        })

        it('returns true for strings with 15 characters', () => {
            expect(isPasswordValid('123456789ABCDEF').valid).toBeTruthy();
        })

        it('returns false for strings with 1 character', () => {
            expect(isPasswordValid('1').valid).toBeFalsy();
        })

        it('returns false for strings with 16 characters', () => {
            expect(isPasswordValid('123456789ABCDEFF').valid).toBeFalsy();
        })
    })

    describe('Contains at least one digit Contains at least one upper case letter', () => {
        it('should return true for 123456789ABCDEF', () => {
            expect(isPasswordValid('123456789ABCDEF').valid).toBeTruthy();
        })

        it('should return false if no upper case letters in string', () => {
            expect(isPasswordValid('123456789abcdef').valid).toBeFalsy();
        })

        it('should return false if no digits in string', () => {
            expect(isPasswordValid('ABCDEFG').valid).toBeFalsy();
        })
    })

    describe('Return an object containing a boolean result', () => {
        it('should return an object', () => {
            expect(typeof isPasswordValid('ABCDEFG')).toBe('object');
        })
    })

    describe('and an errors key that contains an error message or type for all errors in occurrence', () => {
        it('should return an error if string is too small', () => {
            expect(isPasswordValid('ABC1').errors).toHaveLength(1);
        })

        it('should return an error if string is too big', () => {
            expect(isPasswordValid('123456789ABCDEFF').errors).toHaveLength(1);
        })

        it('should return an error if string has no upper case letters', () => {
            expect(isPasswordValid('123456').errors).toHaveLength(1);
        })

        it('should return an error if string has no numbers', () => {
            expect(isPasswordValid('ABCDEF').errors).toHaveLength(1);
        })

        it('should be able to return multiple errors', () => {
            expect(isPasswordValid('123').errors).toHaveLength(2);
        })
    })
})

