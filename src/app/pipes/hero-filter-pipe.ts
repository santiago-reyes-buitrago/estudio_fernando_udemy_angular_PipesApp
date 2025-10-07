import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {

  transform(value: Hero[],search: string, ...args: unknown[]): Hero[] {
    return search ?
      value.filter(hero => hero.name.toLowerCase().includes(search.trim().toLowerCase()))
      : value;
  }

}
