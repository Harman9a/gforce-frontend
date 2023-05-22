import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  constructor() {
    Aos.init();
  }
}
