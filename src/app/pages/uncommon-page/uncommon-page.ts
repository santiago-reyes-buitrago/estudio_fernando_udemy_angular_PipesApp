import {Component, signal} from '@angular/core';
import {Card} from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  UpperCasePipe
} from '@angular/common';
import {interval, map, tap} from 'rxjs';

const client1 = {
  name: 'Santiago',
  gender: 'male',
  age: 30,
  address: 'Ottawa, Canada'
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canada'
}


@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.html',
  styleUrl: './uncommon-page.css'
})
export default class UncommonPage {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2)
      return;
    }
    this.client.set(client1)
  }


  clientsMap = signal({
    '=0': 'no hay clientes esperando',
    '=1': 'hay un cliente esperando',
    other: 'hay # clientes esperando',
  })
  clients = signal<string[]>(['Maria', 'Pedro', 'Santiago', 'Melisa', 'Natalia', 'Andrea', 'Juan', 'Carlos'])

  deleteClient() {
    this.clients.update((prev) => prev.slice(1))
  }

  // keyValuePipe
  profile = {
    name: 'Santiago',
    age: 30,
    address: 'Ottawa, Canada'
  }

  // asyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola mundo')
      // reject('error')
      console.log('Promesa finalizada')
    }, 3500)
  })

  MyObservableTimer  = interval(2000).pipe(
    map(value =>  value+1),
    tap(value => console.log('tap',value))
  );
}
