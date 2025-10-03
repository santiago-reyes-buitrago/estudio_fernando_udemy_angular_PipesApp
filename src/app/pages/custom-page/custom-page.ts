import {Component} from '@angular/core';
import {Card} from '../../components/card/card';
import {ToogleCasePipe} from '../../pipes/toogle-case-pipe';

@Component({
  selector: 'custom-page',
  imports: [
    Card,
    ToogleCasePipe
  ],
  templateUrl: './custom-page.html',
  styleUrl: './custom-page.css'
})
export default class CustomPage {

}
