import { Component, Input } from '@angular/core';

@Component({
  selector: 'nativestory-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent {
  @Input() name = 'katerina';
  @Input() age = 33;
  @Input() happy = true;
}
