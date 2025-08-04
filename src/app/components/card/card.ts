import {Component, input} from '@angular/core';

@Component({
  selector: 'uncommon-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  title = input.required()
}
