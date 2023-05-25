import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent {
  constructor(
    private ds: DataService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  activeForm = 1;
  fName = '';
  mName = '';
  lName = '';
  email = '';
  dob = '';
  pNumber = '';
  gender = 'demo';
  address = '';
  password = '';
  con_password = '';
  profile_img = '';
  file: any = '';

  fNameErr = false;
  mNameErr = false;
  lNameErr = false;
  emailErr = false;
  dobErr = false;
  pNumberErr = false;
  addressErr = false;
  passwordErr = false;
  genderErr = false;
  con_passwordErr = false;
  profile_imgErr = false;
  fileErr = false;

  fName2 = '';
  mName2 = '';
  lName2 = '';
  email2 = '';
  dob2 = '';
  pNumber2 = '';
  gender2 = 'demo';
  address2 = '';
  password2 = '';
  con_password2 = '';
  profile_img2 = '';
  file2: any = '';

  fName2Err = false;
  mName2Err = false;
  lName2Err = false;
  email2Err = false;
  dob2Err = false;
  pNumber2Err = false;
  address2Err = false;
  gender2Err = false;
  password2Err = false;
  con_password2Err = false;
  profile_img2Err = false;
  file2Err = false;

  studentTabStatus: any = true;
  sTabValue = 50;
  pTabValue = 50;

  parentTabStatus: any = true;

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onChange2(event: any) {
    this.file2 = event.target.files[0];
  }

  handleSubmit() {
    let result = true;

    if (this.gender == '') {
      this.genderErr = true;
      result = false;
    } else {
      this.genderErr = false;
      result = true;
    }

    if (this.email == '') {
      this.emailErr = true;
      result = false;
    } else {
      this.emailErr = false;
      result = true;
    }

    if (this.password == '') {
      this.passwordErr = true;
      result = false;
    } else {
      this.passwordErr = false;
      result = true;
    }

    if (this.con_password == '') {
      this.con_passwordErr = true;
      result = false;
    } else {
      this.con_passwordErr = false;
      result = true;
    }

    if (this.file == '') {
      this.fileErr = true;
      result = false;
    } else {
      this.fileErr = false;
      result = true;
    }

    if (result) {
      this.spinner.show();
      let data: any = new FormData();
      data.append('fName', this.fName);
      data.append('mName', this.mName);
      data.append('lName', this.lName);
      data.append('email', this.email);
      data.append('dob', this.dob);
      data.append('gender', this.gender);
      data.append('pNumber', this.pNumber);
      data.append('address', this.address);
      data.append('password', this.password);
      data.append('profile_img', this.file);
      data.append('type', this.activeForm);
      this.ds.signup(data).subscribe((res) => {
        this.spinner.hide();

        this.fName = '';
        this.mName = '';
        this.lName = '';
        this.email = '';
        this.dob = '';
        this.pNumber = '';
        this.address = '';
        this.password = '';
        this.con_password = '';
        this.profile_img = '';
        this.file = '';
        Swal.fire('', 'Account Created Successfully', 'success');
        this.router.navigateByUrl('login');
      });
    }
  }

  handleSubmit2() {
    let result = true;

    if (this.gender2 == '') {
      this.gender2Err = true;
      result = false;
    } else {
      this.gender2Err = false;
      result = true;
    }

    if (this.email2 == '') {
      this.email2Err = true;
      result = false;
    } else {
      this.email2Err = false;
      result = true;
    }

    if (this.password2 == '') {
      this.password2Err = true;
      result = false;
    } else {
      this.password2Err = false;
      result = true;
    }

    if (this.con_password2 == '') {
      this.con_password2Err = true;
      result = false;
    } else {
      this.con_password2Err = false;
      result = true;
    }

    if (this.file2 == '') {
      this.file2Err = true;
      result = false;
    } else {
      this.file2Err = false;
      result = true;
    }

    if (result) {
      this.spinner.show();

      let data: any = new FormData();
      data.append('fName', this.fName2);
      data.append('mName', this.mName2);
      data.append('lName', this.lName2);
      data.append('email', this.email2);
      data.append('dob', this.dob2);
      data.append('pNumber', this.pNumber2);
      data.append('gender', this.gender2);
      data.append('address', this.address2);
      data.append('password', this.password2);
      data.append('profile_img', this.file2);
      data.append('type', this.activeForm);

      this.ds.signup(data).subscribe((res) => {
        this.spinner.hide();

        this.fName2 = '';
        this.mName2 = '';
        this.lName2 = '';
        this.email2 = '';
        this.dob2 = '';
        this.pNumber2 = '';
        this.address2 = '';
        this.password2 = '';
        this.con_password2 = '';
        this.profile_img2 = '';
        this.file2 = '';
        Swal.fire('', 'Account Created Successfully', 'success');
        this.router.navigateByUrl('login');
      });
    }
  }

  studentTab(n: any) {
    let result = true;

    if (this.fName == '') {
      this.fNameErr = true;
      result = false;
    } else {
      this.fNameErr = false;
      result = true;
    }

    if (this.mName == '') {
      this.mNameErr = true;
      result = false;
    } else {
      this.mNameErr = false;
      result = true;
    }

    if (this.lName == '') {
      this.lNameErr = true;
      result = false;
    } else {
      this.lNameErr = false;
      result = true;
    }

    if (this.dob == '') {
      this.dobErr = true;
      result = false;
    } else {
      this.dobErr = false;
      result = true;
    }

    if (this.pNumber == '') {
      this.pNumberErr = true;
      result = false;
    } else {
      this.pNumberErr = false;
      result = true;
    }

    if (this.address == '') {
      this.addressErr = true;
      result = false;
    } else {
      this.addressErr = false;
      result = true;
    }

    if (result) {
      this.studentTabStatus = !this.studentTabStatus;
      if (n == 2) {
        this.sTabValue = 100;
      } else {
        this.sTabValue = 50;
      }
    }
  }

  parentTab(n: any) {
    let result = true;

    if (this.fName2 == '') {
      this.fName2Err = true;
      result = false;
    } else {
      this.fName2Err = false;
      result = true;
    }

    if (this.mName2 == '') {
      this.mName2Err = true;
      result = false;
    } else {
      this.mName2Err = false;
      result = true;
    }

    if (this.lName2 == '') {
      this.lName2Err = true;
      result = false;
    } else {
      this.lName2Err = false;
      result = true;
    }

    if (this.dob2 == '') {
      this.dob2Err = true;
      result = false;
    } else {
      this.dob2Err = false;
      result = true;
    }

    if (this.pNumber2 == '') {
      this.pNumber2Err = true;
      result = false;
    } else {
      this.pNumber2Err = false;
      result = true;
    }

    if (this.address2 == '') {
      this.address2Err = true;
      result = false;
    } else {
      this.address2Err = false;
      result = true;
    }

    if (result) {
      this.parentTabStatus = !this.parentTabStatus;
      if (n == 2) {
        this.pTabValue = 100;
      } else {
        this.pTabValue = 50;
      }
    }
  }

  changeActive(no: number) {
    this.activeForm = no;
  }
}
