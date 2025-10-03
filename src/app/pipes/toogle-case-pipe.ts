import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleCase'
})
export class ToogleCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const [flagUpper] = args;
    return flagUpper ?  value.toUpperCase(): value.toLowerCase();
  }

}
