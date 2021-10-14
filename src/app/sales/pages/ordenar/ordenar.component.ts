import { Component, OnInit } from '@angular/core';
import { EColor, IHeroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  orderBy: string = '';
  heros: IHeroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: EColor.azul
    },
    {
      name: 'Batman',
      fly: false,
      color: EColor.negro
    },
    {
      name: 'Robbin',
      fly: false,
      color: EColor.verde
    },
    {
      name: 'Zhazam',
      fly: true,
      color: EColor.rojo
    },
    {
      name: 'hulk',
      fly: false,
      color: EColor.verde
    },
    {
      name: 'goku',
      fly: true,
      color: EColor.azul
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  changeOrderMode(orderBy: string): void {
    this.orderBy = orderBy;
  }

}
