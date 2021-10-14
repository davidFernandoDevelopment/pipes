import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  name: string = 'David';
  gender: string = 'masculino';
  objMapping = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural
  clients: string[] = ['Jose', 'Federico', 'Luisa'];
  clientMapping = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': `tenemos # clientes esperando`
  };

  // keyValue Pipe
  person = {
    name: 'David',
    edad: 26,
    direction: 'Lima, Perú'
  };

  constructor(
  ) { }

  ngOnInit(): void {
  }
  // i18nSelect
  changeClient(): void {
    if (this.name === 'David') {
      this.name = 'Luisa';
      this.gender = 'femenino';
    } else {
      this.name = 'David';
      this.gender = 'masculino';
    }
  }

  // i18nPlural
  deleteClient(): void {
    if (this.clients.length) {
      this.clients.shift();
    } else {
      this.clients = ['Jose', 'Federico', 'Luisa'];
    }
  }

  //Async Pipe
  myObservable = interval(1000); // 0, 1, 2, ...
  valuePromise = new Promise((resolve, _) => {
    setTimeout(() => {
      resolve('Tenemos data');
    }, 3500);
  });
}
