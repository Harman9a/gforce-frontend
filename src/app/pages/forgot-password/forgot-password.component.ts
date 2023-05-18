import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  constructor(private ds: DataService, private router: Router) {}
  step = 1;
  showemail: any = true;
  showotp: any = false;
  showNewPassword: any = false;

  email: string = 'harmanpreet.techie@gmail.com';
  emailErr: any = false;
  otp: any = '';
  otpErr: any = false;
  otpErr2: any = false;
  password: any = '';
  passwordErr: any = false;

  handleEmailSubmit() {
    if (this.step == 1) {
      if (this.email != '') {
        this.emailErr = false;

        let data = new FormData();
        data.append('email', this.email);

        this.ds.handleEmailSubmit(data).subscribe((res: any) => {
          if (res == 1) {
            this.showotp = true;
            this.showemail = false;
            this.step = 2;
          }
        });
      } else {
        this.emailErr = true;
      }
    }

    if (this.step == 2) {
      if (this.otp != '') {
        this.otpErr = false;

        let data = new FormData();
        data.append('email', this.email);
        data.append('otp', this.otp);

        this.ds.handleOtpSubmit(data).subscribe((res: any) => {
          if (res == 1) {
            this.otpErr2 = false;
            this.showotp = false;
            this.showNewPassword = true;
            this.step = 3;
          } else {
            this.otpErr2 = true;
          }
        });
      } else {
        this.otpErr = true;
      }
    }
    if (this.step == 3) {
      if (this.password != '') {
        this.passwordErr = false;

        let data = new FormData();
        data.append('email', this.email);
        data.append('password', this.password);

        this.ds.handleNewPSubmit(data).subscribe((res: any) => {
          console.log(res);
          if (res == 1) {
            Swal.fire('', 'Password Changed Successfully', 'success');
            this.router.navigateByUrl('/login');
          }
        });
      } else {
        this.passwordErr = true;
      }
    }
  }
}
