import { Component, Input } from '@angular/core';

@Component({
  selector: 'nativestory-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent {
  @Input() name = 'katerina';
  @Input() age = 33;
  @Input() happy = true;
}
