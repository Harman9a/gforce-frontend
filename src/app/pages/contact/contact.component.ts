import { Component } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private ds: DataService) {
    Aos.init();
  }

  name: any = '';
  email: any = '';
  phone: any = '';
  message: any = '';

  nameErr: any = false;
  emailErr: any = false;
  phoneErr: any = false;
  messageErr: any = false;

  handleSubmit() {
    let result = true;

    if (this.name == '') {
      this.nameErr = true;
      result = false;
    } else {
      this.nameErr = false;
      result = true;
    }

    if (this.email == '') {
      this.emailErr = true;
      result = false;
    } else {
      this.emailErr = false;
      result = true;
    }

    if (this.phone == '') {
      this.phoneErr = true;
      result = false;
    } else {
      this.phoneErr = false;
      result = true;
    }

    if (this.message == '') {
      this.messageErr = true;
      result = false;
    } else {
      this.messageErr = false;
      result = true;
    }

    if (result) {
      let data: any = new FormData();
      data.append('name', this.name);
      data.append('email', this.email);
      data.append('phone', this.phone);
      data.append('message', this.message);
      this.ds.submitContactForm(data).subscribe((res: any) => {
        this.email = '';
        this.message = '';
        this.name = '';
        this.phone = '';
        Swal.fire('', 'your request has been submitted', 'success');
      });
    }
  }
}
