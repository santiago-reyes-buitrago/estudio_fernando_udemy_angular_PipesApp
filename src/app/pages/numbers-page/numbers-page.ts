import {Component, signal} from '@angular/core';
import {CurrencyPipe, DecimalPipe, PercentPipe} from "@angular/common";

@Component({
  selector: 'app-numbers-page',
  imports: [
    DecimalPipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './numbers-page.html',
  styleUrl: './numbers-page.css'
})
export default class NumbersPage {
  totalSells = signal(24_233_232.5567)
  percent = signal(0.4856)
}
