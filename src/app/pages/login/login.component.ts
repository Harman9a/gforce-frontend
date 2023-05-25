import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private ds: DataService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}
  email: string = 'fml@gmail.com';
  password: string = '123';

  invalidUser = false;

  randomString(length: number) {
    var randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }

  crypt(salt: any, text: any) {
    const textToChars = (text: any) =>
      text.split('').map((c: any) => c.charCodeAt(0));
    const byteHex = (n: any) => ('0' + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code: any) =>
      textToChars(salt).reduce((a: any, b: any) => a ^ b, code);

    return text
      .split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
  }

  handleSubmit() {
    this.spinner.show();
    let token = this.crypt('salt', this.email);
    let data = new FormData();
    data.append('email', this.email);
    data.append('password', this.password);
    data.append('token', token);

    this.ds.signin(data).subscribe((res: any) => {
      this.spinner.hide();
      if (res.length != 0) {
        this.invalidUser = false;
        let storage = { token: token, email: this.email };
        localStorage.setItem('isLogin', JSON.stringify(storage));
        this.router.navigateByUrl('profile');
      } else {
        this.invalidUser = true;
      }
    });
  }
}
