import { InvalidParameterError } from './InvalidParameterError';

export function fizzbuzz(number: Number) {
  if (number < 1 || number > 100) {
    throw new InvalidParameterError('Parameter must be between 1 and 100');
  }

  return '';
}
