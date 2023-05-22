import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-s-workshop',
  templateUrl: './s-workshop.component.html',
  styleUrls: ['./s-workshop.component.css'],
})
export class SWorkshopComponent {
  constructor(private ds: DataService, private router: Router) {
    let isLogin: any = localStorage.getItem('isLogin');
    this.token = JSON.parse(isLogin).token;
    if (isLogin != null && isLogin != '') {
      this.getClasses();
    } else {
      this.router.navigateByUrl('login');
    }
  }

  allClasses: any = [];
  token: any = '';

  handleLogout() {
    localStorage.setItem('isLogin', '');
    this.router.navigateByUrl('login');
  }

  getClasses() {
    let data = new FormData();
    data.append('token', this.token);

    this.ds.getEnrolledWorkshop(data).subscribe((res: any) => {
      res.map((x: any) => {
        x.workshopdatesArr = JSON.parse(x.workshopdates);
      });
      this.allClasses = res;
    });
  }
}
