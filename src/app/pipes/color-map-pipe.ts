import { Pipe, PipeTransform } from '@angular/core';
import {Color, ColorMap} from '../interfaces/hero.interface';

@Pipe({
  name: 'colorMap'
})
export class ColorMapPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return ColorMap[value as Color];
  }

}
