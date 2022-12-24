import { IOutput } from './IOutput';
import { InvalidParameterError } from './InvalidParameterError';

export function fizzbuzz(output: IOutput) {
  return (number: number): void => {
    if (number < 1 || number > 100) {
      throw new InvalidParameterError('Parameter must be between 1 and 100');
    }

    if (number % 3 === 0) {
      output.print('Fizz');
    } else {
      output.print(String(number));
    }
  };
}
