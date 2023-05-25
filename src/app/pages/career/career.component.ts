import { Component } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent {
  constructor(private ds: DataService, private spinner: NgxSpinnerService) {
    this.getCategorys();
    this.getJobs();
    Aos.init();
  }

  name: any = '';
  interestedin: any = '';
  email: any = '';
  coverlatter: any = '';
  message: any = '';
  phone: any = '';
  resume: any = '';
  cover: any = '';

  fileToUpload: any = '';
  fileToUpload2: any = '';

  nameErr: any = false;
  interestedinErr: any = false;
  emailErr: any = false;
  coverlatterErr: any = false;
  messageErr: any = false;
  phoneErr: any = false;
  fileToUploadErr: any = false;
  fileToUpload2Err: any = false;

  allCategory: any = [];
  filtredJobs: any = [];
  alljobs: any = [];

  handleFileInput(files: any) {
    this.fileToUpload = files.files.item(0);
  }

  handleFileInputcover(files: any) {
    this.fileToUpload2 = files.files.item(0);
  }

  getCategorys() {
    this.ds.getJobCategory().subscribe((res) => {
      this.allCategory = res;
    });
  }

  getJobs() {
    this.ds.getJobs().subscribe((res) => {
      this.alljobs = res;
      this.filtredJobs = res;
    });
  }

  handelJobFilter(id: number) {
    this.filtredJobs = [];
    if (id == 0) {
      this.filtredJobs = this.alljobs;
    } else {
      this.alljobs.map((x: any) => {
        if (x.cat_id == id) {
          this.filtredJobs.push(x);
        }
      });
    }
  }

  handleApply(name: any) {
    this.interestedin = name;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  handleSubmit() {
    let result = true;

    if (this.name == '') {
      this.nameErr = true;
      result = false;
    } else {
      this.nameErr = false;
      result = true;
    }

    if (this.interestedin == '') {
      this.interestedinErr = true;
      result = false;
    } else {
      this.interestedinErr = false;
      result = true;
    }

    if (this.email == '') {
      this.emailErr = true;
      result = false;
    } else {
      this.emailErr = false;
      result = true;
    }

    if (this.cover == '') {
      this.coverlatterErr = true;
      result = false;
    } else {
      this.coverlatterErr = false;
      result = true;
    }

    if (this.message == '') {
      this.messageErr = true;
      result = false;
    } else {
      this.messageErr = false;
      result = true;
    }

    if (this.phone == '') {
      this.phoneErr = true;
      result = false;
    } else {
      this.phoneErr = false;
      result = true;
    }

    if (this.fileToUpload == '') {
      this.fileToUploadErr = true;
      result = false;
    } else {
      this.fileToUploadErr = false;
      result = true;
    }

    if (this.fileToUpload2 == '') {
      this.fileToUpload2Err = true;
      result = false;
    } else {
      this.fileToUpload2Err = false;
      result = true;
    }

    if (result) {
      this.spinner.show();
      let data = new FormData();
      data.append('email', this.email);
      data.append('intrestedin', this.interestedin);
      data.append('coverlatter', this.fileToUpload2);
      data.append('message', this.message);
      data.append('name', this.name);
      data.append('phone', this.phone);
      data.append('resume', this.fileToUpload);
      this.ds.submitCareerForm(data).subscribe((res: any) => {
        this.spinner.hide();
        this.email = '';
        this.interestedin = '';
        this.resume = '';
        this.cover = '';
        this.message = '';
        this.name = '';
        this.phone = '';
        Swal.fire('', 'your request has been submitted', 'success');
      });
    }
  }
}
