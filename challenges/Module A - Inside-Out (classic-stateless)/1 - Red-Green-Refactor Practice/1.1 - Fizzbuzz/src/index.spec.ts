/**
 * Write a function
 * that takes numbers from 1 to 100
 * and outputs them as a string,
 * but for multiples of three it returns “Fizz” instead of the number,
 * and for multiples of five it returns “Buzz.”
 * For numbers that are multiples of both three and five, it returns “FizzBuzz.”
 */
import { fizzbuzz } from './fizzbuzz';
import { InvalidParameterError } from './InvalidParameterError';

describe('fizzbuzz', () => {
  const output = { print: jest.fn() };
  const fizzbuzzInstance = fizzbuzz(output);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('Write a function', () => {
    it('is a function', () => {
      expect(typeof fizzbuzzInstance).toBe('function');
    });
  });

  describe('that takes numbers from 1 to 100', () => {
    it('can only take numbers from 1 to 100', () => {
      expect(() => fizzbuzzInstance(300)).toThrowError(new InvalidParameterError('Parameter must be between 1 and 100'));
    });

    it('takes 1', () => {
      expect(() => fizzbuzzInstance(1)).not.toThrowError(new InvalidParameterError('Parameter must be between 1 and 100'));
    });

    it('takes 100', () => {
      expect(() => fizzbuzzInstance(100)).not.toThrowError(new InvalidParameterError('Parameter must be between 1 and 100'));
    });
  });

  describe('and outputs them as a string', () => {
    it('outputs a string', () => {
      fizzbuzzInstance(1);

      expect(typeof output.print.mock.calls[0][0]).toBe('string');
    });
  });

  describe('but for multiples of three it returns “Fizz” instead of the number', () => {
    it('outputs "Fizz" when number is divisible by 3', () => {
      fizzbuzzInstance(3);

      expect(output.print.mock.calls[0][0]).toBe('Fizz');
    });
  });

  describe('and for multiples of five it returns “Buzz.”', function () {
    it('outputs "Buzz" when a number is divisible by 5', () => {
      fizzbuzzInstance(5);

      expect(output.print.mock.calls[0][0]).toBe('Buzz');
    });
  });

  describe('For numbers that are multiples of both three and five, it returns “FizzBuzz.”', () => {
    it('outputs "FizzBuzz" when a number is divisible by 3 and 5', () => {
      fizzbuzzInstance(15);

      expect(output.print.mock.calls[0][0]).toBe('FizzBuzz');
    });
  });
});
