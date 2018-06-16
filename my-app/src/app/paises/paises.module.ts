import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListapaisesComponent } from './listapaises/listapaises.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListapaisesComponent],
  exports:[ListapaisesComponent]
})
export class PaisesModule { }
