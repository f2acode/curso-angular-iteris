import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListapaisesComponent } from './listapaises/listapaises.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ListapaisesComponent],
  exports: [ListapaisesComponent]
})
export class PaisesModule { }
