import { isPalindrome } from "./index";

describe('palindrome checker', () => {
    describe('words like "mom" and "wow" palindromes', () => {
        it('should return true if passed "mom"', () => {
            expect(isPalindrome('mom')).toBeTruthy();
        })

        it('should return true if passed "wow"', () => {
            expect(isPalindrome('wow')).toBeTruthy();
        })
    })

    describe('It also means that words like "bill" are not palindromes', () => {
        it('should return false for "bill"', () => {
            expect(isPalindrome('bill')).toBeFalsy();
        })
    })

    describe('It should still know that something is a palindrome, even if the casing is off', () => {
        it('should return true for "Mom"', () => {
            expect(isPalindrome('Mom')).toBeTruthy();
        })
    })
})