import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-s-claesses',
  templateUrl: './s-claesses.component.html',
  styleUrls: ['./s-claesses.component.css'],
})
export class SClaessesComponent {
  constructor(private ds: DataService, private router: Router) {
    let isLogin: any = localStorage.getItem('isLogin');
    if (isLogin != null && isLogin != '') {
      this.getClasses();
    } else {
      this.router.navigateByUrl('login');
    }
  }

  allClasses: any = [];

  handleLogout() {
    localStorage.setItem('isLogin', '');
    this.router.navigateByUrl('login');
  }

  getClasses() {
    let data = new FormData();
    this.ds.getEnrolledClasses(data).subscribe((res: any) => {
      this.allClasses = res;
    });
  }
}
