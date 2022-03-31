import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourComponent } from './four/four.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FourComponent
  ],
  exports: [
    FourComponent
  ],
})
export class NativelibNonbuildableModule {}
