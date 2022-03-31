import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from './three/three.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ThreeComponent
  ],
  exports: [
    ThreeComponent
  ],
})
export class NativelibBuildableModule {}
