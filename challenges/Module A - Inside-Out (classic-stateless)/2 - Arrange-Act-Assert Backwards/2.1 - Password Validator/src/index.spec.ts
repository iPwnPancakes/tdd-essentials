import { isPasswordValid } from "./index";

describe('password validator', () => {
    describe('Between 5 and 15 characters long', () => {
        it('returns true for strings with 5 characters', () => {
            expect(isPasswordValid('12345')).toBeTruthy();
        })
    })
})

