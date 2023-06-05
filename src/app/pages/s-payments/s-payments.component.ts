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
    this.token = JSON.parse(isLogin).token;
    if (isLogin != null && isLogin != '') {
      this.getPayments();
    } else {
      this.router.navigateByUrl('login');
    }
  }

  token: any = '';

  paymentList: any = [];
  pagenationArr: any = [];
  totalArr: any = [];
  searchTxt: any = '';
  searchArr = [];
  activePage = 0;
  maxRow = 3;

  handleLogout() {
    localStorage.setItem('isLogin', '');
    this.router.navigateByUrl('login');
  }

  getPayments() {
    let data: any = new FormData();
    data.append('token', this.token);
    this.ds.getPayments(data).subscribe((res: any) => {
      res.map((x: any) => {
        if (x.type == 'workshop') {
          x.date = JSON.parse(x.date);
        }
      });
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
    this.paymentList = [];
    this.totalArr.map((x: any, i: number) => {
      if (i < this.maxRow) {
        this.paymentList.push(x);
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
    this.paymentList = [];
    let count = 0;
    for (let i = itemToBeSkiped; i < this.totalArr.length; i++) {
      if (count < this.maxRow) {
        this.paymentList.push(this.totalArr[i]);
      }
      count++;
    }
  }

  filterData() {
    if (this.searchTxt == '') {
      this.setPagination();
    } else {
      let query = this.searchTxt.toLowerCase();
      let res = this.totalArr.filter((item: any) => {
        if (item.booking_name == undefined) {
          return item.name.toLowerCase().indexOf(query) >= 0;
        } else {
          return item.booking_name.toLowerCase().indexOf(query) >= 0;
        }
      });
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
    this.paymentList = [];
    this.searchArr.map((x: any, i: number) => {
      if (i < this.maxRow) {
        this.paymentList.push(x);
      }
    });
  }
}
