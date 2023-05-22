import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css'],
})
export class HomeBannerComponent {
  constructor() {
    Aos.init();
  }
}
