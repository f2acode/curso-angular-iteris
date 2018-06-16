import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoloComponent } from './bolo/bolo.component';
import { PaisesModule } from './paises/paises.module';
import { ListapaisesComponent } from './paises/listapaises/listapaises.component';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout/layout.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';

const appRoutes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'bolo', component: BoloComponent },
    { path: 'paises', component: ListapaisesComponent },
    { path: 'template', component: TemplateDrivenComponent }
  ]
}]

@NgModule({
  declarations: [
    AppComponent,
    BoloComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    PaisesModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
