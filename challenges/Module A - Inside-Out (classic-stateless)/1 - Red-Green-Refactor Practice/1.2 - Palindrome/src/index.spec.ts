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

    describe('It should also be able to detect palindromes in phrases like "Was It A Rat I Saw" and "Never Odd or Even" too', () => {
        it('should return true for "Was It A Rat I Saw"', () => {
            expect(isPalindrome('Was It A Rat I Saw')).toBeTruthy();
        })

        it('should return true for "Never Odd or Even"', () => {
            expect(isPalindrome('Never Odd or Even')).toBeTruthy();
        })
    })
})