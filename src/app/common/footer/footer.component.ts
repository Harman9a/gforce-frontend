import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';
// import $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(
    private ds: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.getHomeData();
  }

  footer_desc = '';
  dance_desc = '';
  links: any = [];
  email: any = '';

  getHomeData() {
    this.ds.getSettingData().subscribe((res: any) => {
      if (res.length != 0) {
        this.dance_desc = res[0].dance_desc;
        this.footer_desc = res[0].footer_desc;
        this.links = JSON.parse(res[0].ameneties);
        // console.log(this.links);
      }
    });
  }

  handleSubmit() {
    let data = new FormData();
    data.append('email', this.email);
    this.ds.submitnewsletter(data).subscribe((res: any) => {
      if (res == 1) {
        this.email = '';
        Swal.fire('', 'Submited Successfully', 'success');
      }
    });
  }
}
