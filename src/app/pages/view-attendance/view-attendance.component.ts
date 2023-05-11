import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css'],
})
export class ViewAttendanceComponent {
  constructor(private ds: DataService, private router: Router) {
    let isLogin: any = localStorage.getItem('isLogin');
    if (isLogin != null) {
      this.getProfile();
    } else {
      this.router.navigateByUrl('login');
    }
  }

  AttendanceArr: any = [];
  bookingId = 0;
  student_id: any = 0;

  getProfile() {
    let data: any = new FormData();
    let isLogin: any = localStorage.getItem('isLogin');
    let token = JSON.parse(isLogin).token;

    data.append('token', token);

    this.ds.getProfile(data).subscribe((res: any) => {
      if (res.length != 0) {
        this.student_id = res[0].id;
        this.getAttendance(res[0].id);
      }
    });
  }

  getAttendance(id: any) {
    this.ds.getAttendance(id).subscribe((res: any) => {
      this.AttendanceArr = res;
    });
  }

  handleLogout() {
    localStorage.setItem('isLogin', '');
    this.router.navigateByUrl('login');
  }
}
