/**
 * Write a function
 * that takes numbers from 1 to 100
 * and outputs them as a string,
 * but for multiples of three it returns “Fizz” instead of the number,
 * and for multiples of five it returns “Buzz.”
 * For numbers that are multiples of both three and five, it returns “FizzBuzz.”
 */
import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
    const output = { print: jest.fn() };
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('Write a function', () => {
        it('is a function', () => {
            expect(typeof fizzbuzz).toBe('function');
        });
    });

    describe('and outputs them as a string', () => {
        it('outputs a string', () => {
            expect(typeof fizzbuzz(1)).toBe('string');
        });
    });

    describe('but for multiples of three it returns “Fizz” instead of the number', () => {
        it('outputs "Fizz" when number is divisible by 3', () => {
            expect(fizzbuzz(3)).toBe('Fizz');
        });
    });

    describe('and for multiples of five it returns “Buzz.”', function () {
        it('outputs "Buzz" when a number is divisible by 5', () => {
            expect(fizzbuzz(5)).toBe('Buzz');
        });
    });

    describe('For numbers that are multiples of both three and five, it returns “FizzBuzz.”', () => {
        it('outputs "FizzBuzz" when a number is divisible by 3 and 5', () => {
            expect(fizzbuzz(15)).toBe('FizzBuzz');
        });
    });
});
