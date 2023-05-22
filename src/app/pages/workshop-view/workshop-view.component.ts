import { Component } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-workshop-view',
  templateUrl: './workshop-view.component.html',
  styleUrls: ['./workshop-view.component.css'],
})
export class WorkshopViewComponent {
  constructor() {
    Aos.init();
  }
}
