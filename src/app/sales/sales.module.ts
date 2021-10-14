import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusculaPipe } from './pipes/mayuscula.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculaPipe,
    VuelaPipe,
    ColorPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class SalesModule { }
