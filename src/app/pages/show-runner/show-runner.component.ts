import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-show-runner',
  templateUrl: './show-runner.component.html',
  styleUrls: ['./show-runner.component.css'],
})
export class ShowRunnerComponent {
  constructor() {
    Aos.init();
  }
}
