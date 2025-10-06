import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanResponseCase'
})
export class BooleanResponseCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const [msgTrue,msgFalse] = args;
    return value ? msgTrue : msgFalse;
  }

}
