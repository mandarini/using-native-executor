import { Component, Input } from '@angular/core';

@Component({
  selector: 'nativestory-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss'],
})
export class FourComponent {
  @Input() name = 'katerina';
  @Input() age = 33;
  @Input() happy = true;
}
