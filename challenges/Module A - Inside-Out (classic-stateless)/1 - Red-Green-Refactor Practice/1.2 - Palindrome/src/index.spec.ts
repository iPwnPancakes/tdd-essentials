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
})