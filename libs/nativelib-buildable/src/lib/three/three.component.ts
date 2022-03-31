import { Component, Input } from '@angular/core';

@Component({
  selector: 'nativestory-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent {
  @Input() name = 'katerina';
  @Input() age = 33;
  @Input() happy = true;
}
