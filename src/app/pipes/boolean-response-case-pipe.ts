import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanResponseCase'
})
export class BooleanResponseCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    const [msgTrue,msgFalse] = args;
    return value ? msgTrue as string : msgFalse as string;
  }

}
