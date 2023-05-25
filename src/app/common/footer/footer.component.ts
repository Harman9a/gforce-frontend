import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
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
    private metaService: Meta,
    private spinner: NgxSpinnerService
  ) {
    this.getHomeData();
  }

  footer_desc = '';
  dance_desc = '';
  links: any = [];
  email: any = '';
  footerNumber: any = '';
  footerAddress: any = '';
  cUsEmail: any = '';

  getHomeData() {
    this.ds.getSettingData().subscribe((res: any) => {
      if (res.length != 0) {
        this.dance_desc = res[0].dance_desc;
        this.footer_desc = res[0].footer_desc;
        this.footer_desc = res[0].footer_desc;
        this.footerNumber = res[0].c_number;
        this.footerAddress = res[0].w_number;
        this.cUsEmail = res[0].cUsEmail;
        this.links = JSON.parse(res[0].ameneties);
      }
    });
  }

  handleSubmit() {
    this.spinner.show();
    let data = new FormData();
    data.append('email', this.email);
    this.ds.submitnewsletter(data).subscribe((res: any) => {
      this.spinner.hide();

      if (res == 1) {
        this.email = '';
        Swal.fire('', 'Submited Successfully', 'success');
      }
    });
  }
}
