import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            routerLink: '/',
            label: 'Textos y fechas',
            icon: 'pi pi-align-left'
          },
          {
            routerLink: 'numbers',
            label: 'Numeros',
            icon: 'pi pi-dollar'
          },
          {
            routerLink: 'no-comunes',
            label: 'No comunes',
            icon: 'pi pi-dollar'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog'
      }
    ];
  }

}
