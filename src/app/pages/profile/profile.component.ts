import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(public ds: DataService, private router: Router) {
    let isLogin: any = localStorage.getItem('isLogin');
    if (isLogin != null && isLogin != '') {
      this.getProfile();
    } else {
      this.router.navigateByUrl('login');
    }
  }

  activeUser: any = [];

  fName = '';
  mName = '';
  lName = '';
  email = '';
  dob = '';
  pNumber = '';
  address = '';
  password = '';
  con_password = '';
  profile_img = '';
  file2: any = '';

  getProfile() {
    let data: any = new FormData();
    let isLogin: any = localStorage.getItem('isLogin');
    let token = JSON.parse(isLogin).token;

    data.append('token', token);

    this.ds.getProfile(data).subscribe((res: any) => {
      if (res.length != 0) {
        let user = res[0];
        console.log(res);

        this.fName = user.firstname;
        this.mName = user.middlename;
        this.lName = user.lastname;

        this.activeUser = user;
      }
    });
  }

  handleLogout() {
    localStorage.setItem('isLogin', '');
    this.router.navigateByUrl('login');
  }

  handleUpdate() {
    let data: any = new FormData();
    data.append('fName', 'this.fName');
    this.ds.signup(data).subscribe((res) => {
      // this.fName = '';
      // this.mName = '';
      // this.lName = '';
      // this.email = '';
      // this.dob = '';
      // this.pNumber = '';
      // this.address = '';
      // this.password = '';
      // this.con_password = '';
      // this.profile_img = '';
      // this.file = '';
      // Swal.fire('', 'Account Created Successfully', 'success');
      this.router.navigateByUrl('login');
    });
  }
}
