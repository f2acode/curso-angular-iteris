import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoloComponent } from './bolo/bolo.component';
import { PaisesModule } from './paises/paises.module';

@NgModule({
  declarations: [
    AppComponent,
    BoloComponent
  ],
  imports: [
    BrowserModule,
    PaisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
