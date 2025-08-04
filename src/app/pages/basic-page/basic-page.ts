import {Component, effect, inject, LOCALE_ID, signal} from '@angular/core';
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {AvailableLocale, LocaleService} from '../../services/locale.service';

interface AvailableLocaleLG {
  value: AvailableLocale;
  language: string;
}

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

  localService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));
  protected languages: AvailableLocaleLG[] = [
    {language: "Español",value: 'es'},
    {language: "Ingles",value: 'en'},
    {language: "Frances",value: 'fr'},
  ]

  nameLower = signal('santiago')
  nameUpper = signal('SANTIAGO')
  fullName = signal('SantIAGo ReYeS')
  customDate = signal(new Date());

  // tickingDate = effect((onCleanup)=>{
  //   const interval = setInterval(() => {
  //     this.customDate.set(new Date());
  //     console.log('tick')
  //   },1000)
  //
  //   onCleanup(()=> {
  //     clearInterval(interval)
  //   })
  // })

  changeLocale(locale: AvailableLocale){
    console.log('changeLocale',locale);
    this.localService.changeLocale(locale)
  }
}
