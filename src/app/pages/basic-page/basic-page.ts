import {Component, effect, signal} from '@angular/core';
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css'
})
export default class BasicPage {
  nameLower = signal('santiago')
  nameUpper = signal('SANTIAGO')
  fullName = signal('SantIAGo ReYeS')
  customDate = signal(new Date());

  tickingDate = effect((onCleanup)=>{
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick')
    },1000)

    onCleanup(()=> {
      clearInterval(interval)
    })
  })
}
