import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private ds: DataService) {}

  name: any = '';
  email: any = '';
  phone: any = '';
  message: any = '';

  handleSubmit() {
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
