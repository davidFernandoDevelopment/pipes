import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './sales/pages/basicos/basicos.component';
import { NoComunesComponent } from './sales/pages/no-comunes/no-comunes.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrdenarComponent } from './sales/pages/ordenar/ordenar.component';


const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
