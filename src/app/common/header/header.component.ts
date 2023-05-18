import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  link1 = '';
  link2 = '';
  link3 = '';
  link4 = '';
  link5 = '';
  link6 = '';
  link7 = '';
  link8 = '';

  handleActiveLink(n: any) {
    if (n == 1) {
      this.link1 = 'active';
      this.link2 = '';
      this.link3 = '';
      this.link4 = '';
      this.link5 = '';
      this.link6 = '';
      this.link7 = '';
      this.link8 = '';
    }
    if (n == 2) {
      this.link2 = 'active';
      this.link1 = '';
      this.link3 = '';
      this.link4 = '';
      this.link5 = '';
      this.link6 = '';
      this.link7 = '';
      this.link8 = '';
    }
    if (n == 3) {
      this.link3 = 'active';
      this.link1 = '';
      this.link2 = '';
      this.link4 = '';
      this.link5 = '';
      this.link6 = '';
      this.link7 = '';
      this.link8 = '';
    }
    if (n == 4) {
      this.link4 = 'active';
      this.link2 = '';
      this.link1 = '';
      this.link3 = '';
      this.link5 = '';
      this.link6 = '';
      this.link7 = '';
      this.link8 = '';
    }
    if (n == 5) {
      this.link5 = 'active';
      this.link1 = '';
      this.link2 = '';
      this.link3 = '';
      this.link4 = '';
      this.link5 = '';
      this.link6 = '';
      this.link7 = '';
      this.link8 = '';
    }
    if (n == 6) {
      this.link6 = 'active';
      this.link1 = '';
      this.link2 = '';
      this.link3 = '';
      this.link4 = '';
      this.link5 = '';
      this.link7 = '';
      this.link8 = '';
    }
    if (n == 7) {
      this.link7 = 'active';
      this.link1 = '';
      this.link2 = '';
      this.link3 = '';
      this.link4 = '';
      this.link5 = '';
      this.link6 = '';
      this.link8 = '';
    }
    if (n == 8) {
      this.link8 = 'active';
      this.link1 = '';
      this.link2 = '';
      this.link3 = '';
      this.link4 = '';
      this.link5 = '';
      this.link6 = '';
      this.link7 = '';
    }
  }
}
