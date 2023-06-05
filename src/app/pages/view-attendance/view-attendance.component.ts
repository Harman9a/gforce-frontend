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

  bookingId = 0;
  student_id: any = 0;

  AttendanceArr: any = [];
  pagenationArr: any = [];
  totalArr: any = [];
  searchTxt: any = '';
  searchArr = [];
  activePage = 0;
  maxRow = 3;

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
      this.totalArr = res;
      this.setPagination();
    });
  }

  setPagination() {
    let data = this.totalArr;
    let maxPaginationNumber = data.length / this.maxRow;
    this.pagenationArr = [];
    for (let i = 0; i < maxPaginationNumber; i++) {
      if (i == 0) {
        this.pagenationArr.push({ no: i, status: 'active' });
      } else {
        this.pagenationArr.push({ no: i, status: '' });
      }
    }
    this.AttendanceArr = [];
    this.totalArr.map((x: any, i: number) => {
      if (i < this.maxRow) {
        this.AttendanceArr.push(x);
      }
    });
  }

  changePage(n: number) {
    this.pagenationArr.map((x: any) => {
      if (x.no == n) {
        x.status = 'active';
      } else {
        x.status = '';
      }
    });
    let itemToBeSkiped = n * this.maxRow;
    this.AttendanceArr = [];
    let count = 0;
    for (let i = itemToBeSkiped; i < this.totalArr.length; i++) {
      if (count < this.maxRow) {
        this.AttendanceArr.push(this.totalArr[i]);
      }
      count++;
    }
  }

  filterData() {
    if (this.searchTxt == '') {
      this.setPagination();
    } else {
      let query = this.searchTxt.toLowerCase();
      let res = this.totalArr.filter(
        (item: any) => item.booking_name.toLowerCase().indexOf(query) >= 0
      );
      this.searchArr = res;
      this.setFakePagination();
    }
  }

  setFakePagination() {
    let data = this.searchArr;
    let maxPaginationNumber = data.length / this.maxRow;
    this.pagenationArr = [];
    for (let i = 0; i < maxPaginationNumber; i++) {
      if (i == 0) {
        this.pagenationArr.push({ no: i, status: 'active' });
      } else {
        this.pagenationArr.push({ no: i, status: '' });
      }
    }
    this.AttendanceArr = [];
    this.searchArr.map((x: any, i: number) => {
      if (i < this.maxRow) {
        this.AttendanceArr.push(x);
      }
    });
  }

  handleLogout() {
    localStorage.setItem('isLogin', '');
    this.router.navigateByUrl('login');
  }
}
