import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// PRIMENG USA EL PAQUETE DE ANIMACIÓN DE ANGULAR
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

// CAMBIAR EL LOCALE DE LA APP.
import localePE from '@angular/common/locales/es-PE';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePE);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-PE'
    } // REGISTRO DE IDIOMA DE MANERA GLOBAL.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
