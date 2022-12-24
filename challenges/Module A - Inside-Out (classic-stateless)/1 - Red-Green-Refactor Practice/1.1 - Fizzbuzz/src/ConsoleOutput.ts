import { IOutput } from './IOutput';

export class ConsoleOutput implements IOutput {
  print(str: string) {
    console.log(str);
  }
}
