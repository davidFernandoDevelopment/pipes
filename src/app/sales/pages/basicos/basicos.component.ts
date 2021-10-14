import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nameLower: string = 'David';
  nameUpper: string = 'DAVID';
  nameComplete: string = 'daViD';

  fecha: Date = new Date();

  constructor() { }
}
