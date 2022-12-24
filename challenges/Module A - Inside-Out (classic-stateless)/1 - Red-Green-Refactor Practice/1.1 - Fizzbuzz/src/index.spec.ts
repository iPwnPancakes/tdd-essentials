/**
 * Write a function
 * that takes numbers from 1 to 100
 * and outputs them as a string,
 * but for multiples of three it returns “Fizz” instead of the number,
 * and for multiples of five it returns “Buzz.”
 * For numbers that are multiples of both three and five, it returns “FizzBuzz.”
 */
const { fizzbuzz } = require('./fizzbuzz');
import { InvalidParameterError } from './InvalidParameterError';

describe('fizzbuzz', () => {
  describe('Write a function', () => {
    it('is a function', () => {
      expect(typeof fizzbuzz).toBe('function');
    });
  });

  describe('that takes numbers from 1 to 100', () => {
    it('can only take numbers from 1 to 100', () => {
      expect(() => fizzbuzz(300)).toThrowError(new InvalidParameterError('Parameter must be between 1 and 100'));
    });

    it('takes 1', () => {
      expect(() => fizzbuzz(1)).not.toThrowError(new InvalidParameterError('Parameter must be between 1 and 100'));
    });

    it('takes 100', () => {
      expect(() => fizzbuzz(100)).not.toThrowError(new InvalidParameterError('Parameter must be between 1 and 100'));
    });
  });

  describe('and outputs them as a string', () => {
    it('returns a string', () => {
      expect(typeof fizzbuzz(1)).toBe('string');
    });
  });
});
