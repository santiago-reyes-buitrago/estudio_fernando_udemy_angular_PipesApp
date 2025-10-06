import {Component, signal} from '@angular/core';
import {Card} from '../../components/card/card';
import {ToogleCasePipe} from '../../pipes/toogle-case-pipe';
import {heroes} from '../../data/heroes.data';
import {Hero} from '../../interfaces/hero.interface';
import {BooleanResponseCasePipe} from '../../pipes/boolean-response-case-pipe';
import {ColorPipe} from '../../pipes/color-pipe';
import {ColorMapPipe} from '../../pipes/color-map-pipe';

@Component({
  selector: 'custom-page',
  imports: [
    Card,
    ToogleCasePipe,
    BooleanResponseCasePipe,
    ColorPipe,
    ColorMapPipe
  ],
  templateUrl: './custom-page.html',
  styleUrl: './custom-page.css'
})
export default class CustomPage {
  flag = signal<boolean>(false);
  heroes = signal<Hero[]>(heroes);


  handleFlag(){
    this.flag.update(flag => !flag);
  }

}
