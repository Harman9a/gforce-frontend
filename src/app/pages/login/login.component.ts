import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private ds: DataService, private router: Router) {}
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

  handleSubmit() {
    let token = this.randomString(20);
    let data = new FormData();
    data.append('email', this.email);
    data.append('password', this.password);
    data.append('token', token);

    this.ds.signin(data).subscribe((res: any) => {
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
