import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent {
  constructor(
    private ds: DataService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    let isLogin: any = localStorage.getItem('isLogin');
    if (isLogin != null) {
      this.getProfile();
    } else {
      this.router.navigateByUrl('login');
    }
  }

  AllBookingsArr: any = [];
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
        this.getBookings(res[0].id);
      }
    });
  }

  getBookings(id: any) {
    this.ds.getAllBookings(id).subscribe((res: any) => {
      this.AllBookingsArr = res;
      console.log(res);
    });
  }

  handleAttendance() {
    this.spinner.show();
    let date = new Date();
    let data: any = new FormData();

    this.AllBookingsArr.map((x: any) => {
      if (x.booking_id == this.bookingId) {
        data.append('student_id', this.student_id);
        data.append('type', x.type);
        data.append('date', date.toLocaleDateString());
        data.append('time', date.toLocaleTimeString());
        data.append('class_id', this.bookingId);
        this.ds.markAttendance(data).subscribe((res) => {
          this.spinner.hide();
          this.router.navigateByUrl('/attendanceSuccess');
        });
      }
    });
  }
  handleLogout() {
    localStorage.setItem('isLogin', '');
    this.router.navigateByUrl('login');
  }
}
