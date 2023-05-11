import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-s-payments',
  templateUrl: './s-payments.component.html',
  styleUrls: ['./s-payments.component.css'],
})
export class SPaymentsComponent {
  constructor(private ds: DataService, private router: Router) {
    let isLogin: any = localStorage.getItem('isLogin');
    if (isLogin != null && isLogin != '') {
      // this.getProfile();
    } else {
      this.router.navigateByUrl('login');
    }
  }
  handleLogout() {
    localStorage.setItem('isLogin', '');
    this.router.navigateByUrl('login');
  }
}
