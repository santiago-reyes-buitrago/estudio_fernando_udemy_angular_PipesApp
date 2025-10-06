import { Pipe, PipeTransform } from '@angular/core';
import {Color} from '../interfaces/hero.interface';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return Color[value as number];
  }

}
