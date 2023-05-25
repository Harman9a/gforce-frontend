import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(
    public ds: DataService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    let isLogin: any = localStorage.getItem('isLogin');
    if (isLogin != null && isLogin != '') {
      this.getProfile();
    } else {
      this.router.navigateByUrl('login');
    }
  }

  activeUser: any = [];
  token: any = '';
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
  file: any = '';
  gender: any = 'demo';

  getProfile() {
    let data: any = new FormData();
    let isLogin: any = localStorage.getItem('isLogin');
    let token = JSON.parse(isLogin).token;
    this.token = token;

    data.append('token', token);

    this.ds.getProfile(data).subscribe((res: any) => {
      if (res.length != 0) {
        let user = res[0];

        this.fName = user.firstname;
        this.mName = user.middlename;
        this.lName = user.lastname;
        this.dob = user.dob;
        this.gender = user.gender;
        this.pNumber = user.phone;
        this.address = user.address;
        this.email = user.email;

        this.activeUser = user;
      }
    });
  }

  handleLogout() {
    localStorage.setItem('isLogin', '');
    this.router.navigateByUrl('login');
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  demoFun() {
    console.log(this.gender);
  }

  handleUpdate() {
    this.spinner.show();
    let data: any = new FormData();

    data.append('fName', this.fName);
    data.append('mName', this.mName);
    data.append('lName', this.mName);
    data.append('dob', this.dob);
    data.append('pNumber', this.pNumber);
    data.append('address', this.address);
    data.append('email', this.email);
    data.append('file', this.file);
    data.append('token', this.token);
    data.append('gender', this.gender);

    this.ds.updateUser(data).subscribe((res) => {
      this.spinner.hide();

      console.log(res);
      Swal.fire('', 'Account Updated Successfully', 'success');
      // this.router.navigateByUrl('login');
    });
  }
}
