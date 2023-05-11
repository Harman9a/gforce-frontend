import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent {
  constructor(private ds: DataService) {
    this.getCategorys();
    this.getJobs();
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
    let data = new FormData();

    data.append('email', this.email);
    data.append('intrestedin', this.interestedin);
    data.append('coverlatter', this.fileToUpload2);
    data.append('message', this.message);
    data.append('name', this.name);
    data.append('phone', this.phone);
    data.append('resume', this.fileToUpload);

    this.ds.submitCareerForm(data).subscribe((res: any) => {
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
