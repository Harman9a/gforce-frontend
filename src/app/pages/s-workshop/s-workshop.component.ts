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

  // allClasses: any = [];
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

  getClasses() {
    let data = new FormData();
    data.append('token', this.token);

    this.ds.getEnrolledWorkshop(data).subscribe((res: any) => {
      res.map((x: any) => {
        x.workshopdatesArr = JSON.parse(x.workshopdates);
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
    this.allClasses = [];
    this.totalArr.map((x: any, i: number) => {
      if (i < this.maxRow) {
        this.allClasses.push(x);
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
    this.allClasses = [];
    let count = 0;
    for (let i = itemToBeSkiped; i < this.totalArr.length; i++) {
      if (count < this.maxRow) {
        this.allClasses.push(this.totalArr[i]);
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
        if (item.branchName == undefined) {
          return item.name.toLowerCase().indexOf(query) >= 0;
        } else {
          return item.branchName.toLowerCase().indexOf(query) >= 0;
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
    this.allClasses = [];
    this.searchArr.map((x: any, i: number) => {
      if (i < this.maxRow) {
        this.allClasses.push(x);
      }
    });
  }
}
