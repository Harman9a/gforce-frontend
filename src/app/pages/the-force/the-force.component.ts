import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-the-force',
  templateUrl: './the-force.component.html',
  styleUrls: ['./the-force.component.css'],
})
export class TheForceComponent {
  constructor() {
    Aos.init();
  }
}
